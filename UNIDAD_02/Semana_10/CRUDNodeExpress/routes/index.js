var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display books page
router.get('/sumas/compañia', function (req, res, next) {

  dbConn.query('SELECT * FROM tblusuarios', function (err, rows) {

    if (err) {
      req.flash('error', err);
      // render to views/books/index.ejs
      res.render('sumas/compañia', { data: '' });
    } else {
      // render to views/books/index.ejs
      res.render('sumas/compañia', { data: rows });
    }
  });
  router.get('/sumas', function (req, res, next) {
    res.render('sumas/compañia');
  });
});

module.exports = router;