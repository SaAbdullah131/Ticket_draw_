require('dotenv').config('../.env');
const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');
const {errorHandler,notFoundHandler} = require('./error');

const app = express();


// middleware
app.use(middleware);
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;