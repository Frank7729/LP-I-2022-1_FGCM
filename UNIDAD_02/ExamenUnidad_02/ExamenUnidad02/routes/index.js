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
  res.render('dashboard');
});
router.get('/main03', function(req, res, next) {
  res.render('formCN');
});
module.exports = router;
