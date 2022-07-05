var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display books page
router.get('/', function (req, res, next) {

  dbConn.query('SELECT SUM(saldo) FROM clientes WHERE compañia="UNEFON";', function (err, rows) {

    if (err) {
      req.flash('error', err);
      // render to views/books/index.ejs
      res.render('compañia', { data: '' });
    } else {
      // render to views/books/index.ejs
      res.render('compañia', { data: rows });
    }
  });
});

router.get('/sumas', function (req, res, next) {
  res.render('compañia');
});
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('compañia');
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
