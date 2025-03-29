const express = require('express');
const userRoutes = require('./users');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use('/auth', authMiddleware, require('./auth'));
router.use('/users', userRoutes);

module.exports = router;