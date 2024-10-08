const express = require('express');
const cors = require('cors');

const morgan = require('morgan');
const globalErrorHandler = require('./controller/errorController');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/users', userRouter);

app.use(globalErrorHandler);

module.exports = app;
