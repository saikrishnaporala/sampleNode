var express = require('express'),
  router = express.Router(),
  HttpStatus = require('http-status-codes');

/* GET users listing. */
router.all('/*', function (req, res, next) {
  if(!req.session.user){
    return res.status(HttpStatus.UNAUTHORIZED)
      .json({
        errorCode: 'AE001',
        error: 'Not authenticated'
      });
  }

  return next();
});

module.exports = router;
