const express = require('express');
const { getUserProfileByJwt } = require('../controller/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();



router.get('/profile',authMiddleware,getUserProfileByJwt );

module.exports = router;
