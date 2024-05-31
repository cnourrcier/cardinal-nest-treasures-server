const express = require('express');
const router = express.Router();
const { signup, login, requestPasswordReset, resetPassword } = require('../controllers/authController');
const { getUserProfile } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);

// Protected route to get user profile
router.get('/profile', protect, getUserProfile);

module.exports = router;