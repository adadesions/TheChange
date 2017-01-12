var express = require('express');
var router = express.Router();
var fs = require('fs');

// Data section
var greetingSlide = readJSON('public/data/greeting-slide.json').slide;
var onebedSlide = readJSON('public/data/onebed-slide.json').slide;
var twobedSlide = readJSON('public/data/twobed-slide.json').slide;
var facilitiesSlide = readJSON('public/data/facilities-slide.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {greetingSlide});
});

router.get('/accomodation/:type', function(req, res, next) {
  res.render('accomodation/'+req.params.type, {onebedSlide, twobedSlide});
});

router.get('/services', function(req, res, next) {
  res.render('services');
});

router.get('/facilities', function(req, res, next) {
  res.render('facilities', {facilitiesSlide});
});

router.get('/aboutus', function(req, res, next) {
    res.render('aboutus/aboutus');
});

router.get('/aboutus/:about', function(req, res, next) {
    res.render('aboutus/'+req.params.about);
});

module.exports = router;

// Function Section
function readJSON(path){
  let data = fs.readFileSync(path);
  return JSON.parse(data);
}
