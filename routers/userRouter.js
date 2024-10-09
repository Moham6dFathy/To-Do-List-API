const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.patch('/forgotPassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.passwordResetToken);
router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword,
);

router
  .route('/')
  .get(userController.getAllUser)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    userController.createUser,
  )
  .patch(authController.protect, userController.updateMe)
  .delete(authController.protect, userController.deleteMe);

router.route('/:id').get(userController.getUser);

module.exports = router;
