const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Invalid email.'),
    check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('First Name is required'),
    check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Last Name is required'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

// Sign up
router.post(
    '/',
    validateSignup,
    async (req, res, next) => {

      // const existingUsernames = await User.findAll({
      //   attributes: ['username'],
      //   raw: true
      // })

      // const existingEmails = await User.findAll({
      //   attributes: ['email'],
      //   raw: true
      // })
      const { username, email, firstName, lastName, password } = req.body;

      try {
        const user = await User.signup({ username, email, firstName, lastName, password });
        res.json(user)
      } catch(e) {
        e.errors.forEach(error => {
          if (error.type === 'unique violation') {
            const newError = new Error('User already exists')
            newError.status = 403
            if (error.path === 'email') newError.errors = { email: 'User with that email already exists'}
            else if (error.path === 'username') newError.errors = { username: 'User with that username already exists'}
            next(newError)
          }
        })
        next(e)
      }

      // for (let obj of existingUsernames) {
      //   if (req.body.username == obj.username) {
      //     return res.status(403).json({
      //       message: "User already exists",
      //       statusCode: 403,
      //       errors: {
      //         username: "User with that username already exists"
      //       }
      //     })
      //   }
      // }

      // for (let obj of existingEmails) {
      //   if (req.body.email = obj.email) {
      //     return res.status(403).json({
      //       message: 'User already exists',
      //       statusCode: 403,
      //       errors: {
      //         email: "User with that email already exists"
      //       }
      //     })
      //   }
      // }

  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    }
  );

  module.exports = router;