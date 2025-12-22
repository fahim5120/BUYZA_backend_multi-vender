const express = require('express');
const { getSellerProfile, createSeller, getAllSellers, updateSeller, verifyLoginOtp } = require('../controller/SellerController');
const { sellerMiddleware } = require('../middlewares/sellerAuthMiddleware');
const router = express.Router();


router.get('/profile',sellerMiddleware,getSellerProfile);
router.post('/',createSeller);
router.get('/',getAllSellers);
router.patch('/',sellerMiddleware, updateSeller);


router.post('/verify/login-otp',verifyLoginOtp);


module.exports=router

 
