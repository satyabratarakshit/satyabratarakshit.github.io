var app = angular.module("myApp", ["ngRoute"]);

app.controller("myCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.search = "";  
    $scope.$on("loginuser", function(e, data){
        $scope.search = data.login;
    });

}]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'links/home.html'
        })
        .when("/search/:a", {
            templateUrl: 'links/search.html'
        })
        .when("/aboutus", {
            templateUrl: 'links/aboutus.html'
        });
}]);

app.controller("popularUsers", ["$scope", "$http","$rootScope", function ($scope, $http, $rootScope) {
    $http.get("https://api.github.com/users")
        .then(function (response) {
            $scope.userprofile = response.data.html_url;
            $scope.datas = response.data;           
        });
    $scope.searchdata = function(val){
        var value = val;
        $scope.$emit("loginuser",{login: value});
    };        
}]);

app.controller("searchUser", ["$scope", "$http", "$rootScope", "$routeParams", function ($scope, $http, $rootScope, $routeParams) {
    $scope.a = $routeParams.a;           
    $scope.$parent.search = $scope.a;     

    $http.get("https://api.github.com/users/" + $scope.a)
        .then(function (response) {
            $scope.userdata = response.data;
            $scope.username = response.data.name;
            $scope.userimage = response.data.avatar_url;
            $scope.userlogin = response.data.login;
            $scope.userurl = response.data.html_url;
        });
    $http.get("https://api.github.com/users/" + $scope.a + "/repos")
        .then(function (response) {
            $scope.reponame = response.data;            
        });

    //$scope.languageData = null;
    $scope.showLanguage = function (url, index) {

        $http.get(url).then(function (res) {

            var data = res.data;
            $scope.repodata = data;
            var total = 0;
            for (key in data) {
                total += parseInt(data[key]);
            }
            $scope.reponame[index].total = total;
            if (data) {
                $scope.reponame[index].languageData = data;
            }

        })
    }
}]);
app.directive('showParcent', function () {
    return {
        replace: true,
        link: function (scope, element, attr) {
            var getParcent = ((attr.value / attr.total) * 100).toFixed(1);
            var key = (attr.key).toLowerCase()
            element.append('<div class="progress-wrapper"><div class="progress-bar progress-bar-success ' + key + '" style="width:' + getParcent + '%">' + getParcent + '%' + '<span>' + attr.key + '</span></div></div>');
        }
    }
})

