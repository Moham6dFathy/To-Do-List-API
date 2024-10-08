const express = require('express');
const userController = require('../controller/userController');
const taskController = require('../controller/taskController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(taskController.getTasksOfUser)
  .post(taskController.createTaskForUser);

router
  .route('/:taskId')
  .get(taskController.getOneTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);


module.exports = router;
