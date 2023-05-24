var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/people.ejs', function(req, res, next) {
  res.render('people', { title: 'Express' });
});

router.get('/publications.ejs', function(req, res, next) {
  res.render('publications', { title: 'Express' });
});

module.exports = router;
