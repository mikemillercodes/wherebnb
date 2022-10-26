const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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
                [Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating'],
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
                [Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating'],
                [Sequelize.col('SpotImages.url'), 'previewImage']
            ]
        }
    })

    // let spots = []
    // for (let spot of ownedSpots) {
    //     spot = spot.toJSON()
    //     delete spot.createdAt
    //     delete spot.updatedAt
    //     spots.push(spot)
    // }

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

// Create a Spot
router.post('/', requireAuth, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const newSpot = await Spot.create({
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
        order: [[ 'createdAt', 'DESC']],
      })
      res.statusCode = 201
    res.json(newestSpot.pop())
})

// Add an Image to a Spot based on the Spot'd id
// router.post('/:spotId/images', requireAuth, async (req, res, next) => {
//     const { url, preview } = req.body

//     const newImage = await Spot.create({
//         url,
//         preview
//     })

//     res.json(newImage)
// })

module.exports = router;