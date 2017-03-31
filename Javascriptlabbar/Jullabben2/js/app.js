/// <reference path="angular.min.js" />

var app = angular.module("moviesApp", []);

var controllers = {};
controllers.homecontroller = function ($scope, movieFactory) {
    $scope.movies = movieFactory.movies;

    $scope.Login = function () {
        movieFactory.validateCredentials($scope.loginUsername, $scope.loginPassword)
            .then(function (resolveResponse) {
                localStorage.removeItem("username");
                localStorage.setItem("username", resolveResponse)

                if ($scope.loginRememberMe) {
                    localStorage.setItem("userToBeRemembered", localStorage.getItem("username"));
                } else {
                    localStorage.removeItem("userToBeRemembered");
                }

                window.location.href = "index.html";
            }, function (rejectResponse) {
                $scope.loginStatus = rejectResponse;
            })
    }

    $scope.getCurrentUser = function () {
        var username = localStorage.getItem("username");
        console.log(username)
        return username;
    }

    $scope.CheckForRememberedUser = function () {
        movieFactory.getRememberedUser()
            .then(function (resolveResponse) {
                $scope.loginUsername = resolveResponse.username;
                $scope.loginPassword = resolveResponse.password;
                $scope.loginRememberMe = true;
            }, function (rejectResponse) {
                console.log(rejectResponse);
            });
    };

    $scope.CheckForRememberedUser();
}

app.factory("movieFactory", function ($q) {
    var myFactory = {};

    myFactory.users = [
        { name: "Nisse K", username: "nissek", password: "123" },
        { name: "Nisse P", username: "nissep", password: "1234" },
        { name: "Nisse E", username: "emilf", password: "12345" },
        { name: "Nisse H", username: "henrikb", password: "123456" },
        { name: "Kevin K", username: "drunkenwhisp", password: "mhannet84" },
    ]
    myFactory.movies = [
        { title: "Harry Potter 1", year: "1999" },
        { title: "Harry Potter 2", year: "2001" },
        { title: "Harry Potter 3", year: "2003" },
        { title: "Sagan om ringen 1", year: "1993" },
        { title: "Sagan om ringen 2", year: "1994" },
        { title: "Sagan om ringen 3", year: "1996" },
        { title: "Star Wars 1", year: "2010" },
        { title: "Star Wars 2", year: "2011" },
        { title: "Star Wars 3", year: "2012" },
    ]

    myFactory.validateCredentials = function (username, password) {
        var q = $q.defer();
        var userToBeLoggedIn = {};
        angular.forEach(myFactory.users, function (currentUser, key) {
            if (currentUser.username == username && currentUser.password == password) {
                userToBeLoggedIn = currentUser;
            };
        });

        if (angular.equals(userToBeLoggedIn, {})) {
            q.reject('The combination of user and password did not match. Please try again!');
        } else {
            q.resolve(userToBeLoggedIn.name);
        }

        return q.promise;
    };

    myFactory.getRememberedUser = function () {
        var q = $q.defer();

        var userToBeRetrieved = {};

        angular.forEach(myFactory.users, function (currentUser, key) {
            if (currentUser.name == localStorage.getItem("userToBeRemembered")) {
                userToBeRetrieved = currentUser;
            }
        });

        if (angular.equals(userToBeRetrieved, {})) {
            q.reject("no user to be remembered");
        } else {
            q.resolve(userToBeRetrieved);
        };

        return q.promise;
    }

    return myFactory;
})
app.controller(controllers);