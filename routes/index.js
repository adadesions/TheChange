var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Change Suites' });
});

router.get('/accomodation/:type', function(req, res, next) {
  res.render('accomodation/'+req.params.type);
});

module.exports = router;
