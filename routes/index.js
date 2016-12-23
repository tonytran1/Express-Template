module.exports = function(io) {
  const express = require('express');
  const router = express.Router();
  const ioConnect = require('../socket/ioServer.js');

  io.on('connection', socket => ioConnect(io, socket));

  router.get('/', (request, response, next) => {
    response.render('index', { title: 'Express Template' });
  });

  return router;
}
