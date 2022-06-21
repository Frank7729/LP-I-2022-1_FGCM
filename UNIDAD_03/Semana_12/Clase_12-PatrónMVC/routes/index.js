var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inscripción', function(req, res, next) {
  res.render('inscripción');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/events', function(req, res, next) {
  res.render('events');
});

module.exports = router;
