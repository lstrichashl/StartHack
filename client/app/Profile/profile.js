angular.module('myApp')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'Profile/profile.html',
            controller: 'profileCtrl'
        });
    }])
    .controller('profileCtrl', ['$scope', 'challengeDB',function($scope, challengeDB) {
        $scope.profile = {
            username: 'lior_strichash',
            followers: 4592,
            following: 543,
            posts: challengeDB.challenges.filter(function(cha){
                return cha.complitedUsers.indexOf('lior_strichash') != -1;
            }),
            image: 'static/1905954410403422527630489170767033179457648n.jpg'
        };
    }]);
