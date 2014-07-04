var buttons_app = angular.module('buttons_app', ['ngRoute','firebase']);

buttons_app.config(['$routeProvider', function ($routeProvider) {

//    $routeProvider.when('/login', {
//    templateUrl: 'static/views/login.html',
//    controller: 'authController'
//    });


    $routeProvider.when('/', {
        templateUrl: 'views/templates/buttons.html',
        controller: 'buttonsController'
    });

}]);

