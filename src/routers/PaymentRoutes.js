// paymentRoutes.js
const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();
const PaymentController = require("../controller/PaymentController");


// Define route for payment success
router.get('/:paymentId',authMiddleware, PaymentController.paymentSuccessHandler);

module.exports = router;
