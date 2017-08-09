var express = require('express'),
  router = express.Router(),
  HttpStatus = require('http-status-codes');

module.exports = function (env){
  // catch 404 and forward to error handler
  router.use(function (req, res) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Wow!... Your Request Not Found'
      });
  });

  // error handlers
  router.use(function (err, req, res) {
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        message: err.message,
        error: env === 'development' ? err : {}
      });
  });

  return router;
};
