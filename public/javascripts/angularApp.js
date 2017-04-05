// JavaScript Document
var swingApp = angular.module('swingApp', ['ui.router']);

//config block, inject services that are part of ui.router module
swingApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('welcome', {  //name of the state
		url: '/welcome', //url in address bar for app
		templateUrl: 'welcome.html'
		})
	.state('register', {  //name of the state
		url: '/register', //url in address bar for app
		templateUrl: 'register.ejs'
		})
	.state('login', {  //name of the state
		url: '/login', //url in address bar for app
		templateUrl: 'login.ejs'
		})
	.state('forget', {  //name of the state
		url: '/forget', //url in address bar for app
		templateUrl: 'forget.ejs'
		})
		.state('home', {  //name of the state
		url: '/home', //url in address bar for app
		templateUrl: 'home.ejs'
		})
			.state('account', {  //name of theaccount
		url: '/account', //url in address bar for app
		templateUrl: 'account.ejs'
		})
				.state('settings', {  //name of the state
		url: '/settings', //url in address bar for app
		templateUrl: 'settings.ejs'
		})
					.state('survey', {  //name of the state
		url: '/survey', //url in address bar for app
		templateUrl: 'survey.ejs'
		})
						.state('progress', {  //name of the state
		url: '/progress', //url in address bar for app
		templateUrl: 'progress.ejs'
		})
							.state('aboutus', {  //name of the state
		url: '/aboutus', //url in address bar for app
		templateUrl: 'aboutus.ejs'
		})
								.state('help', {  //name of the state
		url: '/help', //url in address bar for app
		templateUrl: 'help.ejs'
		})
									.state('gallery', {  //name of the state
		url: '/gallery', //url in address bar for app
		templateUrl: 'gallery.ejs'
		})
									.state('quotes', {  //name of the state
		url: '/quotes', //url in address bar for app
		templateUrl: 'quotes.ejs'
		});
		
	//second state for details page, get rid of the semi colon, line 11.
	$urlRouterProvider.otherwise('/welcome');			
	}]);




//controller1
