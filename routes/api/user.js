const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('./../../db/models');

const UserRepository = require('../../db/user-repository')
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const email =
    check('email')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail();

const username =
    check('username')
        .not().isEmpty()
        .withMessage('Please provide a username');

const password =
    check('password')
        .not().isEmpty()
        .withMessage('Please provide a password');

router.post('/user', email, password, username, asyncHandler(async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({ status: 422, errors: errors.array() });
    }

    const user = await UserRepository.create(req.body);

    const { jti, token } = generateToken(user);
    user.tokenId = jti;
    await user.save();
    res.json({ token, user: user.toSafeObject() });
}));

router.get('/user', authenticated, (req, res) => {
    res.json({
        email: req.user.email,
        username: req.user.username,
    });
});



router.post('/', asyncHandler(async (req, res) => {
    const user = await db.User.create(
        {
            username: 'Demo-lition',
            email: 'demo@example.com',
            hashedPassword: createPassword()
        });
    console.log(user);

}));

module.exports = router;
