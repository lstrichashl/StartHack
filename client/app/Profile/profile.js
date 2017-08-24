angular.module('myApp')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'Profile/profile.html',
            controller: 'profileCtrl'
        });
    }])
    .controller('profileCtrl', ['$scope', 'postsDB',function($scope, postsDB) {
        $scope.profile = {
            username: 'lior_strichash',
            followers: 4592,
            following: 543,
            posts: postsDB.posts.filter(function(post){
                return post.user == 'lior_strichash';
            }),
            image: 'static/1905954410403422527630489170767033179457648n.jpg'
        };
    }]);
