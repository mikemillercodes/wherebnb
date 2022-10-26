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
                [ Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating' ],
                [ Sequelize.col('SpotImages.url'), 'previewImage']
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
                [ Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating' ],
                [ Sequelize.col('SpotImages.url'), 'previewImage']
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
router.get('/:spotId', async (req, res) => {
    let spotId = req.params.spotId

    const spot = await Spot.findAll({
        where: {
            id: spotId
        },
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
                [ Sequelize.fn('SUM', Sequelize.col('Reviews.id')), 'numReviews' ],
                [ Sequelize.col('SpotImages.url'), 'url'],
                [ Sequelize.col('SpotImages.id'), 'id'],
                [ Sequelize.col('SpotImages.preview'), 'preview']
            ]
        }
    })
    res.json(spot[0])
})
// add numReviews
// add avgStarRating
// add SpotImages (array of objects)

module.exports = router;