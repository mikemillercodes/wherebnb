const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User, ReviewImage, Booking } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Get all bookings of the current user
router.get('/current', requireAuth, async (req, res, next) => {
  
    const userId = req.user.id

    const userBookings = await Booking.findAll({
        include: [
            {
                model: Spot,
                attributes: {
                    exclude: ['description', 'createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: SpotImage,
                        where: {
                            preview: true
                        },
                        attributes: ['url'],
                        required: false
                    }
                ]
            }
        ],
        where: {
            userId
        }
    })

    for (let i = 0; i < userBookings.length; i++) {
        let booking = userBookings[i].toJSON()
        userBookings[i] = booking

        if (booking.Spot) {
            booking.Spot.previewImage = booking.Spot.SpotImages[0].url
            delete booking.Spot.SpotImages
        }
    }

    res.json({ Bookings: userBookings })
})

module.exports = router;