'use strict'
myPortfolio.controller('MainCtrl', function($scope){
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
	    		"name": "css3.png"
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
	    	// },
	    	// {
	    	// 	"name": "mongo.png"
	    	}
	    ];
	})
