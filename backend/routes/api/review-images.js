const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User, ReviewImage } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Delete a Review Image
router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const { imageId } = req.params
    const { user } = req

    const image = await ReviewImage.findByPk(imageId)

    if (image) {
        const review = await Review.findByPk(image.reviewId)
        if (review.userId !== user.id) {
            const error = new Error("Review image must belong to the current user")
            error.status = 401;
            next(error)
        }
    }

    if(!image) {
        res.status(404).json({
            message: "Review image couldn't be found",
            statusCode: 404
        })
    }

    await image.destroy()
    res.status(200).json({
        message: "Successfully deleted",
        statusCode: 200
    })
})

module.exports = router;

