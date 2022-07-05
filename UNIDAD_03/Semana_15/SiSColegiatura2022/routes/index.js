var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inscripcion', function(req, res, next) {
  res.render('inscripcion');
});

router.get('/login', function(req, res, next) {
  res.render('login_01', { title: 'Login' });
});

router.post('/main', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email);
  dbConn.query("SELECT * FROM usuarios WHERE email='"+email+"' AND password='"+password+"'",function(err,rows)     {
    if(err) {
        req.flash('error', err); 
    }else {
        if(rows.length){
          console.log(rows);
          req.session.idu=rows[0]["id"];
          req.session.email=rows[0]["email"];
          req.session.loggedin = true;
          res.redirect('/dashboard');
        }else{
          req.flash('error', 'El usuario no existe...');
          res.redirect('/login');
        }
    }
  });
});

router.get('/dashboard', function(req, res, next) {
  if(!req.session.loggedin){
    res.redirect('/');
  }else{
    res.render('main');
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect("/login");
});

router.get('/cliente-list', function(req, res, next) {  
  dbConn.query('SELECT * FROM clientes',function(err,rows)     {
      if(err) {
          req.flash('error', err);
          res.render('clientes/list',{data:''});   
      }else {
          res.render('clientes/list',{data:rows});
      }
  });
});

module.exports = router;
