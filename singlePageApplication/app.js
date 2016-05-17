// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        //.when('/', {
        //    templateUrl: '/index.html',
        //    controller: 'mainController'
        //})

        // route for the login page
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })

        // route for the signup page
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'signupController'
        });
});


myApp.controller('mainController', function ($scope) {
    
});

myApp.controller('loginController', function ($scope) {
  
});

myApp.controller('signupController', function ($scope) {
    $scope.items = [];
    $scope.itemsToAdd = [{
        UserName: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        city: ''
    }];
    $scope.save=function(itemsToAdd)
    {
        //alert($scope.itemsToAdd.length);
        //var index = $scope.itemsToAdd.indexOf(itemsToAdd);
        //$scope.itemsToAdd.splice(index, 1);
        debugger;
        
        $scope.items.push(angular.copy(itemsToAdd))
        //for (var i = 0; i <= $scope.items.length; i++) {
        //    $scope.itemsToAdd[i] = '';
        //}
    }
    //$scope.contacts = {
    //    name: '',
    //    email: '',
    //    phone: '',
    //    password: '',
    //    address: '',
    //    city: ''
    //};
    
    //$scope.save = function (user) {

    //    $scope.contacts.name = user.UserName;
    //    $scope.contacts.email = user.email;
    //    $scope.contacts.phone = user.phone;
    //    $scope.contacts.password = user.password;
    //    $scope.contacts.address = user.address;
    //    $scope.contacts.city = user.city;
       
    //    //$scope.contacts = user;
    //    debugger;
    //};
    
});