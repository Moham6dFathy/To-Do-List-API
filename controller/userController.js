const User = require('../models/UserModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.find({ active: { $ne: false } });

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { active: false },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(204).json({
    message: 'User Deleted Successfuly',
  });
});
