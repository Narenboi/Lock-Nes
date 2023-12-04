var express = require('express');
var router = express.Router();
const db = require('../database/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createUser', { title: 'Create User' });
  });
  
  router.post('/', async function(req, res, next) {
    let email = req.body.email;
    let brugernavn = req.body.brugernavn;
    let password = req.body.password;
    db.createUser(email, password, brugernavn)
      .then(() => {
        //set cookie
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
        res.render('createUser', { title: 'Create User', errorMessage: 'User creation failed. Please try again.' });
      });
  });

  module.exports = router;
