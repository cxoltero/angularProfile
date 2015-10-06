'use strict'
var myPortfolio = angular.module('myPortfolio', ['ui.bootstrap', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/about',{
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/portfolio',{
			templateUrl: 'views/portfolio.html',
			controller: 'PortfolioCtrl'
		})
		.when('/contact',{
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/resume',{
			templateUrl: 'views/resume.html',
			controller: 'ResumeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
	})
	.directive('backgroundDirective', function(){
		return function(scope, element, attrs){
			element.css({
				'background': 'url('+attrs.backgroundDirective+'no-repeat bottom center fixed)',
			})
		}
	})
