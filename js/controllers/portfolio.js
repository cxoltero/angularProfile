'use strict'
myPortfolio.controller('PortfolioCtrl', function($scope){

		$scope.projects = [
			{
				'name': 'Pixelect',
				'url': 'https://github.com/ga-wdi-pixelect',
				'description' : 'Pixelect is a RoR web app developed as a joint project during my Web Develpment bootcamp. This app consists of a rails API and an HandlebarsJS front end app.',
				'image': 'img/pixelect.png'
			},
			{
				'name': 'easyManage',
				'url': 'https://github.com/cxoltero/easyManage',
				'description' : 'EasyManage is a RoR app intended to be a one stop for the hospitality industry organization. The technologies used are RoR, Javascript, HTML5/CSS3',
				'image': 'img/easyManage.png'
			},
			{
				'name': 'myContacts',
				'url': 'https://github.com/cxoltero/angularAddressBook',
				'description' : 'youSearch is a simple web page made with JQuery and the youtube API. The purpose of youSearch is to look for videos in a clean interface.',
				'image': 'img/angularContacts.png'
			},
			{
				'name': 'YouSearch',
				'url': 'http://cxoltero.github.io/YouSearch/',
				'description' : 'myContacts is a web based address book made with AngularJS and firebase API. ',
				'image': 'img/youSearch.png'
			},
			{
				'name': 'ImageGallery',
				'url': 'https://github.com/cxoltero/BootstrapImageGallery',
				'description' : 'This project is a gallery website made with bootstrap. This was a small project to experiment with bootstrap.',
				'image': 'img/imgGallery.png'
			},
			{
				'name': 'Restaurant Website',
				'url': 'http://cxoltero.github.io/cancunjohnston/',
				'description' : 'This project is a website for the restaurant I currently work at. It is made using mainly bootstrap.',
				'image': 'img/mexRestaurant.png'
			},
			{
				'name': 'Digital Agency',
				'url': 'https://github.com/cxoltero/agencyTemplate',
				'description' : 'This project is a bootstrap template for a digital agency. It is intended to be a simple single page website.',
				'image': 'img/galleryFront.png'
			}
		]
	})
