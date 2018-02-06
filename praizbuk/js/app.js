var app = angular.module("myApp", ["ngRoute"]);
app.controller("myCtrl", function ($scope, $http) {
	$scope.warning = "Angular Is Working";
	$scope.showmodal = function (item) {
		$http.get('./js/details.json')
			.then(function (response) {
				$scope.heading = response.data[item].heading;
				$scope.body = response.data[item].body;
			})
	};
	$scope.trendData = [{
		"assetType": "image",
		"thumbSrc": "http://via.placeholder.com/220x88?text=grid1",
		"heading": "trend heading 1"
	}, {
		"assetType": "image",
		"thumbSrc": "http://via.placeholder.com/220x88?text=grid2",
		"heading": "trend heading 2"
	}, {
		"assetType": "image",
		"thumbSrc": "http://via.placeholder.com/220x88?text=grid3",
		"heading": "trend heading 3"
	}, {
		"assetType": "image",
		"thumbSrc": "http://via.placeholder.com/220x88?text=grid4",
		"heading": "trend heading 4"
	}, {
		"assetType": "image",
		"thumbSrc": "http://via.placeholder.com/220x88?text=grid5",
		"heading": "trend heading 5"
	}, {
		"assetType": "video",
		"thumbSrc": "http://via.placeholder.com/220x88?text=grid6",
		"heading": "trend heading 6"
	}, {
		"assetType": "image",
		"thumbSrc": "http://via.placeholder.com/220x88?text=grid7",
		"heading": "trend heading 7"
	}];
});
app.directive('customScrollbar', [function () {
    return {
      link: function (scope, element, attr) {        
        element.mCustomScrollbar({
					
				});
      }
    }

  }]);

app.config(function($routeProvider){
	$routeProvider					
		.when("/",{
			templateUrl : 'links/home.html'
		})
		.when("/a1",{
			templateUrl : 'links/a1.html'
		});				
});