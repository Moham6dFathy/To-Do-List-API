const mongoose = require('mongoose');
const User = require('../models/UserModel.js');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task must has Title!'],
  },
  startDate: {
    type: Date,
    default: `${Date.now()}`,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  notes: {
    type: String,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  favourite: {
    type: Boolean,
    default: false,
  },
  important: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = new mongoose.model('tasks', TaskSchema);

module.exports = Task;
