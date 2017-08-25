angular.module('myApp')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'Profile/profile.html',
            controller: 'profileCtrl'
        });
    }])
    .controller('profileCtrl', ['$scope', 'DB',function($scope, DB) {
        $scope.profile = DB.profiles.find(function(pro){
            return pro.username == 'lior_strichash';
        });
        $scope.posts = DB.posts.filter(function(post){
            return post.profile.username == 'lior_strichash';
        });
        $scope.posts = $scope.posts.map(function(post){
            post.donated = true;
            return post;
        });
    }]);
