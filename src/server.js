'use strict';

const express = require('express');
const server = express();
const cors = require('cors');

const logger = require('./middleware/logger.js');
const routes = require('./router.js');

server.use(cors());
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
server.use(express.json());
server.use(logger);


server.use('/', routes);

module.exports = {
  server,
  start: (port) => {
    server.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  },
};
