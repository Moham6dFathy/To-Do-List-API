const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.patch('/forgotPassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.passwordResetToken);

router
  .route('/')
  .get(userController.getAllUser)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    userController.createUser,
  );
router.route('/:id').get(userController.getUser);

module.exports = router;
