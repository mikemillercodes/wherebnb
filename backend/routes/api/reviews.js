const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User, ReviewImage } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const reviewimage = require('../../db/models/reviewimage');

// Add an Image to a Review based on the Review's id
router.post('/:reviewId/images', requireAuth, async (req, res, next) => {
    const { reviewId } = req.params
    const { url } = req.body

    const review = await Review.findByPk(reviewId)

    if (!review) {
        res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }
    
    const newReviewImage = await ReviewImage.create({
        reviewId,
        url: url
    })

    const returnedReviewImage = await ReviewImage.findByPk(newReviewImage.id, {
        attributes: {
            exclude: ['reviewId', 'createdAt', 'updatedAt']
        }
    })
    res.json(returnedReviewImage)
})

// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res, next) => {
    const userId = req.user.id

    const allUserReviews = await Review.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            },
            {
                model: Spot, 
            }
        ],
        where: {
            userId
        },
        group: ['Review.id']
    })

    const result = []

    for (let review of allUserReviews) {
        review = review.toJSON()
        let spot = review.Spot

        let spotImage = await SpotImage.findOne({
            where: {
                spotId: spot.id,
                preview: true
            }
        })
        spot.previewImage = spotImage.url
        delete spot.description
        delete spot.createdAt
        delete spot.updatedAt
        delete review.Spot
        review.Spot = spot
        result.push(review)
    }

    res.json({ Reviews: result })
})


module.exports = router;