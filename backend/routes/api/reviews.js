const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User, ReviewImage } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const reviewimage = require('../../db/models/reviewimage');
const spot = require('../../db/models/spot');

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
        group: ['Review.id', 'User.id']
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

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    handleValidationErrors
]

// Edit a Review
router.put('/:reviewId', validateReview, requireAuth, async (req, res, next) => {
    const { reviewId } = req.params
    const { user } = req
    const { id, userId, spotId, review, stars } = req.body

    const _review = await Review.findByPk(reviewId)

    if (_review && _review.userId !== user.id) {
        const error = new Error('Unauthorized')
        error.status = 401;
        next(error)
    }

    if (!_review) {
        const error = new Error("Review couldn't be found")
        error.status = 404;
        next(error)
    }

    if (stars < 1 || stars > 5 || isNaN(stars)) {
        res.json({
            stars: 'Stars must be an integer from 1 to 5'
        })
    }

    await _review.update({ review, stars })

    res.json(_review)
})

// Delete a review
router.delete('/:reviewId', requireAuth, async (req, res, next) => {
    const { reviewId } = req.params
    const { user } = req

    const review = await Review.findByPk(reviewId)

    if (!review) {
        res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }

    if (review.userId !== user.id) {
        const error = new Error("Review must belong to current user")
        error.status = 401;
        next(error)
    }

    await review.destroy()
    res.status(200).json({
        message: "Successfully deleted",
        statusCode: 200
    })
})


module.exports = router;