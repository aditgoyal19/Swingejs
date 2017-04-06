var express = require('express');
//1. Add path module
var path = require('path');

var router = express.Router();


var mongoose = require('mongoose');
/*change model*/
var User = require('../models/User.js');

var passport = require('passport');

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}



/* 0. GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'swing' });
}); 
/* 1. GET welcome page. */
router.get('/welcome', function(req, res) {
  res.render('welcome', { title: 'swing/welcome' });
}); 
/* 2. GET login page. */
router.get('/login', function(req, res) {
	  res.render('login', { title: 'swing/login' });
}); 
router.post('/login',
  passport.authenticate('local', { successRedirect: '/home',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);


/* 3. GET register page. */
router.get('/register', function(req, res) {
	  res.render('register', { title: 'swing/register' });
}); 

router.post('/register', function(req, res) {



if(req.body.password = req.body.confirm){


    User.register(new User({ username : req.body.username,
    	email : req.body.email }), req.body.password, function(err, user) {
        if (err) {
        	 console.log(err);
   
             res.render('register', { user : user,title:'Register' });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
  }
  else{
    console.log("password doesnt match");
     res.redirect('/register');
  }
});

/* 4. GET home page. */
router.get('/home', function(req, res) {
    res.render('home', { title: 'swing/home' });
}); 


/* 5. GET account page. */
router.get('/account',isLoggedIn, function(req, res) {
    res.render('account', { title: 'swing/account' });
}); 


/* 6. GET settings page. */
router.get('/settings', function(req, res) {
    res.render('settings', { title: 'swing/settings' });
}); 


/* 7. GET survey page. */
router.get('/survey', function(req, res) {
    res.render('survey', { title: 'swing/survey' });
}); 


/* 8. GET progress page. */
router.get('/progress', function(req, res) {
    res.render('progress', { title: 'swing/progress' });
}); 


/* 9. GET aboutus page. */
router.get('/aboutus', function(req, res) {
    res.render('aboutus', { title: 'swing/aboutus' });
}); 


/* 10. GET help page. */
router.get('/help', function(req, res) {
    res.render('help', { title: 'swing/help' });
}); 


/* 11. GET gallery page. */
router.get('/gallery', function(req, res) {
    res.render('gallery', { title: 'swing/gallery' });
}); 

/* 12. GET gallery page. */
router.get('/quotes', function(req, res) {
    res.render('quotes', { title: 'swing/quotes' });
}); 

/*13.logout*/
  router.get('/logout', function (req, res, next) {
     req.logout();
    res.redirect('/login');
  });
  /* 14. GET gallery page. */
router.get('/blog', function(req, res) {
    res.render('blog', { title: 'swing/blog' });
}); 
/* 15. GET gallery page. */
router.get('/terms', function(req, res) {
    res.render('terms', { title: 'swing/terms' });
}); 
/* 16. GET gallery page. */
router.get('/policies', function(req, res) {
    res.render('policies', { title: 'swing/policies' });
}); 

module.exports = router;
