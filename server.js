const mongoose = require('mongoose');

require('dotenv').config({ path: './config.env' });

const app = require('./app');

const server = mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('DB connected Succussfully 👍'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
