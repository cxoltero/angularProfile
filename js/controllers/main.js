'use strict'
myPortfolio.controller('MainCtrl', function($scope, $http){
		$http.get("custsql-ipg49.eigbox.net")
    	.success(function (response) {$scope.names = response.records;});


		$scope.navbarCollapsed = false;
		$scope.heroImage = {
        'background-image': 'url(img/backDev.jpg)'
	    };
	    $scope.profilePic = 'img/profileGA.jpg';
	    $scope.icons = [
	    	{
	    		"name": "js.png"
	    	},
	    	{
	    		"name": "html.png"
	    	},
	    	{
	    		"name": "css.png"
	    	},
	    	{
	    		"name": "json.png"
	    	},
	    	{
	    		"name": "angular.png"
	    	},
	    	{
	    		"name": "rails.png"
	    	},
	    	{
	    		"name": "git.png"
	    	},
	    	{
	    		"name": "grunt.png"
	    	},
	    	{
	    		"name": "sql.png"
	    	},
	    	{
	    		"name": "bootstrap.png"
	    	},
	    	{
	    		"name": "ps.png"
	    	},
	    	{
	    		"name": "node.png"
	    	},
	    	{
	    		"name": "mongo.png"
	    	}
	    ];
	    $scope.tabs = [
	    	{
	    		"name": "HOME",
	    		"url": "#/"
	    	},
	    	{
	    		"name": "ABOUT",
	    		"url": "#/about"
	    	},
	    	{
	    		"name": "PORTFOLIO",
	    		"url": "#/portfolio"
	    	},
	    	{
	    		"name": "CONTACT ME",
	    		"url": "#/contact"
	    	},
	    	{
	    		"name": "RESUME",
	    		"url": "#/resume"
	    	}
	    ]
	})
