const express = require('express');
const dotenv = require('dotenv');

// import routes
const bootcampRoutes = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: 'config/config.env' });

const PORT = process.env.PORT || 5000;

const app = express();


// mount the routes
app.use('/api/v1/bootcamps', bootcampRoutes);

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
