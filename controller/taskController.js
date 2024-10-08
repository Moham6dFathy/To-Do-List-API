const Task = require('../models/TaskModel');
const ApiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.getTasksOfUser = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(
    Task.find({ userId: req.user.id }),
    req.query,
  )
    .filter()
    .sort()
    .limitFileds()
    .pagination();
  const tasks = await features.query;

  res.status(200).json({
    status: 'success',
    data: {
      tasks,
    },
  });
});

exports.getOneTask = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.user.id);

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.createTaskForUser = catchAsync(async (req, res, next) => {
  req.body.userId = req.user.id;
  const task = await Task.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: 'sucess',
    data: {
      task,
    },
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  await Task.findByIdAndDelete(req.user.id);

  res.status(204).json({
    status: 'success',
    data: {},
  });
});
