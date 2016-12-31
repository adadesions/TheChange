var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/accomodation/:type', function(req, res, next) {
  res.render('accomodation/'+req.params.type);
});

router.get('/services', function(req, res, next) {
  res.render('services');
});

module.exports = router;
