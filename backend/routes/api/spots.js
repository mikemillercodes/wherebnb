const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User, ReviewImage } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const spot = require('../../db/models/spot');

// Get all Spots
router.get('/', async (req, res, next) => {

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
        group: ['Spot.id', 'SpotImages.url']
    })
    return res.json({
        "Spots": spots
    })
})

// Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res, next) => {
    const ownerId = req.user.id
    console.log('user id', req.user.id)
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
            { address: address },
            { city: city },
            { state: state },
            { country: country },
            { lat: lat },
            { lng: lng },
            { name: name },
            { description: description },
            { price: price },
            { where: spotId }
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

module.exports = router;
