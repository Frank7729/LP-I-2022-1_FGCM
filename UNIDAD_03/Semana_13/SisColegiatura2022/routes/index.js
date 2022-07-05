var express = require('express');
var router = express.Router();

var dbConn = require('../lib/db');

// display books page
router.get('/clientes/cantidad', function (req, res, next) {

  dbConn.query('SELECT SUM(saldo) AS Saldo FROM clientes WHERE compañia=clientes.compañia', function (err, rows) {

    if (err) {
      req.flash('error', err);
      // render to views/books/index.ejs
      res.render('clientes/compañia', { data: '' });
    } else {
      // render to views/books/index.ejs
      res.render('clientes/compañia', { data: rows });
    }
  });
});
/*
router.get('/clientes/cantidad', function (req, res, next) {

  dbConn.query('SELECT nivel, COUNT(nivel) AS cantidad FROM '+
  'tblusuarios GROUP BY nivel', function (err, rows) {

    if (err) {
      req.flash('error', err);
      // render to views/books/index.ejs
      res.render('cantidad_nivel/cantidad', { data: '' });
    } else {
      // render to views/books/index.ejs
      res.render('cantidad_nivel/cantidad', { data: rows });
    }
  });
});*/

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('main');
});

router.get('/inscripcion', function (req, res, next) {
  res.render('inscripcion');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/main', function (req, res, next) {
  res.render('main');
});

router.get('/clientes/list', function (req, res, next) {
  res.render('clientes/list');
});

module.exports = router;
