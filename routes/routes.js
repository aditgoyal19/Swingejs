var express = require('express');
var nodemailer= require ('nodemailer');
var hashcash = require('nodemailer-hashcash');
//1. Add path module
var path = require('path');

var router = express.Router();

var transporter= nodemailer.createTransport('smtps://shilarora10@gmail.com:plumpeach@smtp.gmail.com');
var transporterSup=nodemailer.createTransport('smtps://shilwebsup@gmail.com:plumpeach@smtp.gmail.com');
//transporter.use('compile', hashcash());
//transporterSup.use('compile', hashcash());

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

router.post("/help",function(req,res,next){
	//var lastName= req.body.lname;
	var firstName= req.body.username;
	var emailTo= req.body.email;
	//var emailSubject= req.body.subject;
	var emailMessage= req.body.message+" Recieved from Name:"+" "+ firstName+" with Email Address: "+emailTo;
	
	
	// setup email with data to send from admin account to support account
	var mailOptions = {
    from: 'shilarora10@gmail.com', // admin address
    to: 'shilwebsup@gmail.com', // support address
    subject: "Message from Swing App", // Subject line
    text: emailMessage // plaintext body
   
						};

	// send mail with defined admin transport object
	transporter.sendMail(mailOptions, function(error, info){
    if(error){ 
        return console.log(error);
    }
	else{
							// setup email with data to send from support account to customer account
						var mailOptionsSup = {
						from: 'shilwebsup@gmail.com', // sender address
						to: emailTo, // list of receivers
						subject: 'Message from Shil Inc. Support', // Subject line
						text: 'Hello  '+firstName+','+'\u000d \u000d'+'Thanks for choosing Shil Inc. We will send you complete details shortly.'+'\u000d \u000d'+'Regards,'+'\u000d \u000d'+'Shil Inc.' // plaintext body

						};
						// send mail with defined support transport object
							transporterSup.sendMail(mailOptionsSup, function(error, info){
									if(error){ 
													return console.log(error);
											}
									else
									{
										res.send("Thanks for your message. You will recieve the email from us soon" );
									}		
		
							});
		}
	
			});
	
	
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
