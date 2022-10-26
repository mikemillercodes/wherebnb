const express = require('express');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, Sequelize, SpotImage, User } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Delete a Spot image for a spot
router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const { imageId } = req.params
  
    const image = await SpotImage.findByPk(imageId)
    
    if (!image) {
        res.status(404)
        res.json({
            message: "Spot Image couldn't be found",
            statusCode: 404
        })
    }

    await image.destroy()
    res.json({
        message: "Successfully deleted",
        statusCode: 200
    })
  
  })

  module.exports = router;