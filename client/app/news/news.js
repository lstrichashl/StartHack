angular.module('myApp')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'news/news.html',
            controller: 'newsCtrl'
        });
    }])
    .controller('newsCtrl', ['$scope', 'DB',function($scope, DB) {

    }]);
