var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// add a new book
router.post('/add', function (req, res, next) {

    let nombres = req.body.nombre;
    let dni = req.body.dni;
    let celular = req.body.celular;
    let email = req.body.email;
    let errors = false;

    if (name.length === 0 || author.length === 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter name and author");
        // render to add.ejs with flash message
        res.render('books/add', {
            name: name,
            author: author
        })
    }

    // if no error
    if (!errors) {

        var form_data = {
            nombre: nombres,
            dni: dni,
            celular: celular,
            email: email,
        }

        // insert query
        dbConn.query('INSERT INTO inscipcion SET ?', form_data, function (err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)

                // render to add.ejs
                res.render('web/add', {
                    nombre: form_data.nombre,
                    dni: form_data.dni,
                    celular: form_data.celular,
                    email: form_data.email
                })
            } else {
                req.flash('success', 'Person successfully added');
                res.redirect('/');
            }
        })
    }
})

module.exports = router;