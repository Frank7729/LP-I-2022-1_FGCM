var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/main', function(req, res, next) {
  res.render('portalNC');
});
router.get('/main01', function(req, res, next) {
  res.render('registro');
});
router.get('/main02', function(req, res, next) {
  res.render('trámite');
});
router.get('/main03', function(req, res, next) {
  res.render('eventos');
});
module.exports = router;
