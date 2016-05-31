/// <reference path="D:\visualStudioProgram\singlePageApplication\singlePageApplication\views/afterLogin.html" />
// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute', 'ngStorage']);
//alert("Called again");

debugger;


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
        })

    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'afterLogin'
    })

    .when('/afterlogin', {
        templateUrl: 'views/afterLogin.html',
        controller: 'afterLogin'
    });
    //.otherwise({
    //    redirectTo: '/'
    //});


});


myApp.controller('mainController', function ($scope, $rootScope) {
    //alert($rootScope.USERNAME);
        
});

myApp.controller('loginController', function ($scope, $rootScope, $location) {
    //alert($rootScope.items);
    //$scope.showfrnd = false;
    if ($scope.items1 == undefined) {
        $scope.items1 = [];
    }
    //$scope.itemstoAdd1 = [{
    //    USERNAME: '',
    //    PASSWORD: ''
    //}];
    $scope.submit = function (itemstoAdd1) {
        
        //editable

          var UserExist =
        $scope.items1.push(angular.copy(itemstoAdd1));
        localStorage.setItem('saved data', JSON.stringify($scope.items1));
        var data1 = [];
        data1 = JSON.parse(localStorage.getItem('saved data'));
        $rootScope.USERNAME = data1[0].USERNAME;


        var data = [];
        data = JSON.parse(localStorage.getItem('saved value')); 
        //$rootScope.UserExist;
        var UserExists = data.filter(function (item) {
            return item.UserName == itemstoAdd1.USERNAME;

        })

        if (UserExists) {
            if (UserExists.length > 0) {
                alert($rootScope.items);
                //window.location = "views/afterLogin.html";
                $location.path('views/afterLogin.html');
                
            }
            else {
                alert("User not exists");
                return false;
            }
        }

        //editable

        //$location.path('/views/afterLogin.html');
    }

});

myApp.controller('afterLogin', function ($scope, $rootScope) {
    //$scope.showfrnd = false;
    //debugger;

    //var ExistingUsers = [];
    //alert("Check"+$rootScope.dashboard)
    debugger;
    //alert($rootScope.items);
    var data;
    data = JSON.parse(localStorage.getItem('saved value'));


    var data1 = [];

    data1 = JSON.parse(localStorage.getItem('saved data'));
    var loggedUser;
    if (data1) {
        loggedUser = data1[0].USERNAME;
    }


    $scope.AddFriends = [];
    $scope.AddFriends = data.filter(function (item) {
        return item.UserName != loggedUser;
    })

    $scope.addFriend = function (friendData) {
        //debugger;
        for (var i = 0; i < data.length; i++) {
            if (data[i].UserName == loggedUser) {
                if (data[i].AddFr == undefined) {
                    data[i].AddFr = [];

                }
                data[i].AddFr.push(
                    { FriendName: friendData.UserName });
                
                //debugger;
                localStorage.setItem('saved value', JSON.stringify(data));
                $rootScope.ShowAllData = JSON.parse(localStorage.getItem('saved value'));
                //var dashboard = [];
                //$rootScope.dashboard = data;
                //alert(dashboard.UserName);
            }
        }       
    }
    debugger;
    $rootScope.dashboard = data;
    //alert("Check" + $rootScope.dashboard)


    //$scope.showInfo = function () {
    //    //alert($rootScope.Name);
    //}

});

myApp.controller('signupController', function ($scope, $rootScope, $localStorage) {
    //$scope.showfrnd = false;
    debugger;
    //var checkData = $rootScope.dashboard;
    //alert($rootScope.items);
    if ($rootScope.items == undefined) {      
        //alert("Called");
        $rootScope.items = [];      
    }

        $scope.itemsToAdd = [{
            UserName: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            city: ''
        }];

        $scope.save = function (itemsToAdd) {
            debugger;
            var data;
            data = JSON.parse(localStorage.getItem('saved value'));
            
            if (data)
            {
                $rootScope.items = data;
            }
            $rootScope.items.push(angular.copy(itemsToAdd));
          
            alert("data saved successfully");
            //alert($scope.items.length);
            localStorage.setItem('saved value', JSON.stringify($rootScope.items));
            var data = [];

            data = JSON.parse(localStorage.getItem('saved value'));
            //$rootScope.data = data;

            //alert(data[0].UserName);
            //object1 = JSON.parse(localStorage.getItem("saved value"))[0];
            //alert(object1);

            //localStorage.setItem('value', $scope.items);
            //alert(localStorage.getItem('value'));
            ////var a = [];
            //a = $scope.items;

            //localStorage.setItem('a', a);
        }
       
        //}

        //}
    

});