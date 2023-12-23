const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: 'config/config.env' });

// connect to database
connectDB();

// import routes
const bootcampRoutes = require('./routes/bootcamps');
const PORT = process.env.PORT || 5000;

const app = express();

// body parser
app.use(express.json());

// Dev logging middleware
app.use(morgan('dev'));

// mount the routes
app.use('/api/v1/bootcamps', bootcampRoutes);

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // close the server & exit process
  server.close(() => process.exit(1));
});
