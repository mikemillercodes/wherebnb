const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User, ReviewImage, Booking } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const spot = require('../../db/models/spot');
// router.get('/', async (req, res, next) => {

    
    
    //     const spots = await Spot.findAll({
        //         // attributes: {
            //         //     exclude: ['avgRating']
            //         // },
            //         ...pagination
//     })

//     res.json(spots)


// })

// Get all Spots
router.get('/', async (req, res, next) => {
    let { page, size } = req.query
    if (!page) page = 1
    if (!size) size = 20
    
    let pagination = {}
    if (parseInt(page) >= 1 && parseInt(size) >= 1) {
            pagination.limit = size
            pagination.offset = size * (page - 1)
        }

    const spots = await Spot.findAll({
        include: [
            {
                model: Review,
                attributes: []
            },
            {
                model: SpotImage,
                attributes: [],
                where: {
                    preview: true
                },
                required: false
            }
        ],
        attributes: {
            include: [
                [Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 1), 'avgRating'],
                [Sequelize.col('SpotImages.url'), 'previewImage']
            ]
        },
        group: ['Spot.id', 'SpotImages.url'],
        ...pagination,
        subQuery: false
    })
    return res.json({
        "Spots": spots,
        "Page": page,
        "Size": size
    })
})

// Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res, next) => {
    const ownerId = req.user.id
    const ownedSpots = await Spot.findAll({
        include: [
            {
                model: User,
                as: 'Owner',
                attributes: []
            },
            {
                model: Review,
                attributes: []
            },
            {
                model: SpotImage,
                attributes: [],
                where: {
                    preview: true
                },
                required: false
            }
        ],
        where: {
            ownerId
        },
        attributes: {
            include: [
                [Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 1), 'avgRating'],
                [Sequelize.col('SpotImages.url'), 'previewImage']
            ]
        },
        group: ['Spot.id', 'previewImage']
    })

    res.json({
        'Spots': ownedSpots // spots
    })
})

// Get details of a Spot from an id{
router.get('/:spotId', async (req, res, next) => {
    let spotId = req.params.spotId

    const spot = await Spot.findByPk(spotId, {

        include: [
            {
                model: Review,
                attributes: [],
            },
            {
                model: SpotImage,
                attributes: ['id', 'url', 'preview'],
                required: false
            },
            {
                model: User,
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName'],
                required: false
            }
        ],
        attributes: {
            include: [
                [Sequelize.fn('COUNT', Sequelize.col('Reviews.id')), 'numReviews'],
                [Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating'],
            ]
        },
        group: ['SpotImages.id', 'Spot.id', 'Owner.id']
    })
    if (spot) {
        res.json(spot)
    } else {
        const error = new Error("Spot couldn't be found")
        error.status = 404;
        next(error)
    }
})

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required'),
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price per day is required'),
    handleValidationErrors
]
// Create a Spot
router.post('/', validateSpot, requireAuth, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const { user } = req
    const newSpot = await Spot.create({
        ownerId: user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })
    const newestSpot = await Spot.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']],
    })
    res.statusCode = 201
    res.json(newestSpot.pop())
})

// Add an Image to a Spot based on the Spot'd id
router.post('/:spotId/images', requireAuth, async (req, res, next) => {
    const { url, preview } = req.body
    const { user } = req
    const { spotId } = req.params

    const spot = await Spot.findByPk(spotId)

    if (spot && spot.ownerId !== user.id) {
        const error = new Error("Unauthorized")
        error.status = 401;
        next(error)
    }

    if (spot) {
        let newImage = await SpotImage.create({
            spotId,
            url,
            preview
        })
        res.json({
            id: newImage.id,
            url: newImage.url,
            preview: newImage.preview
        })
    } else {
        const error = new Error("Spot couldn't be found")
        error.status = 404;
        next(error)
    }


    res.json(newImage)
})

// Edit a Spot
router.put('/:spotId', validateSpot, requireAuth, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const { user } = req
    const { spotId } = req.params


    const spot = await Spot.findByPk(spotId)

    if (spot && spot.ownerId !== user.id) {
        const error = new Error("Unauthorized")
        error.status = 401;
        next(error)
    }

    if (spot) {
        spot.update(
            { address: address,
            city: city,
            state: state,
            country: country,
            lat: lat,
            lng: lng,
            name: name,
            description: description,
            price: price,
            // where: spotId
         }
        )
        res.json(spot)
    } else {
        const error = new Error("Spot couldn't be found")
        error.status = 404;
        next(error)
    }
})

// Delete a spot
router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const { spotId } = req.params
    const { user } = req

    const spot = await Spot.findByPk(spotId)

    if (!spot) {
        res.status(404)
        res.json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    if (spot && spot.ownerId !== user.id) {
        const error = new Error("Spot must belong to current user")
        error.status = 401;
        next(error)
    }

    await spot.destroy()
    res.json({
        message: "Successfully deleted",
        statusCode: 200
    })
})

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
]

// Create a Review for a Spot based on the Spot'd id
router.post('/:spotId/reviews', validateReview, requireAuth, async (req, res, next) => {
    const { spotId } = req.params
    const { review, stars } = req.body
    const { user } = req

    const spot = await Spot.findByPk(spotId)

    if (!spot) {
        res.status(404)
        res.json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    const allReviews = await Review.findAll({
        where: {
            spotId: spot.id
        }
    })

    for (let i = 0; i < allReviews.length; i++) {
        let review = allReviews[i]
        if (review.userId === user.id) {
            res.status(403).json({
                message: "User already has a review for this spot",
                statusCode: 403
            })
        }
    }



    const newReview = await Review.create({
        userId: user.id,
        spotId: spot.id,
        review,
        stars,
    })
    res.status(201).json(newReview)

})

// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res, next) => {
    const { spotId } = req.params

    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    const reviews = await Review.findAll({
        include: [
            { 
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            }
        ],
        where: {
            spotId
        }
    })

    console.log('reviews: ', reviews)

    let result = []
    for (let review of reviews) {
        review = review.toJSON()
        console.log(review)
        result.push(review)
    }

    res.json({
      Reviews: result
    })
})

const validateBookingDates = [
    // check('review')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Review text is required'),
    // check('stars')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
]

// Create a Booking from a Spot based on the Spot's id
router.post('/:spotId/bookings', handleValidationErrors, requireAuth, async (req, res, next) => {
    const { spotId } = req.params
    const { startDate, endDate } = req.body
    const { user } = req

    const spot = await Spot.findByPk(spotId, {
        include: [
            {
                model: Booking,
                attributes: ['startDate', 'endDate']
                // spot.Bookings.startDate
            }
        ],
    })

    if (!spot) {
        res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    console.log('Start Date: ', startDate)
    console.log('End Date: ', endDate)

    const existingBookings = await Booking.findAll()
    console.log('Current Bookings: ', existingBookings)

    for (let booking of existingBookings) {
        if (booking.endDate === endDate && startDate === booking.startDate) {
            const e = new Error("Sorry, this spot is already booked for the specified dates")
            e.status = 403
            e.errors = {
                endDate: "End date conflicts with an existing booking",
                startDate: "Start date conflicts with an existing booking"
            }
            next(e)
        }
        else if (booking.startDate === startDate) {
            const e = new Error("Sorry, this spot is already booked for the specified dates")
            e.status = 403
            e.errors = {
                startDate: "Start date conflicts with an existing booking"
            }
            next(e)
        }
        else if (booking.endDate === endDate) {
            const e = new Error("Sorry, this spot is already booked for the specified dates")
            e.status = 403
            e.errors = {
                endDate: "End date conflicts with an existing booking"
            }
            next(e)
        }
    }

    const booking = await Booking.create({
        spotId: spot.id,
        userId: user.id,
        startDate,
        endDate
    })
    res.json(booking)
})

// Get all Bookings for a Spot based on the Spot's id
router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
    const { spotId } = req.params
    const { user } = req

    const spot = await Spot.findByPk(spotId)

    if (!spot) {
        res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    if (spot.ownerId === user.id) {
        const bookings = await Booking.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName'] 
                }
            ],
            where: {
                spotId
            }
        })
        res.json({ Bookings: bookings })
    } else if (spot.ownerId !== user.id) {
        const bookings = await Booking.findAll({
            where: {
                spotId
            },
            attributes: ['spotId', 'startDate', 'endDate']
        })
        res.json({ Bookings: bookings })
    }
})

// Add Query Filters to Get All Spots

module.exports = router;

