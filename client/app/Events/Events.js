'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'Events/events.html',
    controller: 'eventsCtrl'
  });
}])

.config(['$routeProvider', function ($routeProvider, $routeParams) {
  $routeProvider.when('/event/:name', {
    templateUrl: 'components/challenge/challenge.html',
    controller: 'eventCtrl'
  });
}])

.controller('eventsCtrl', ['$scope', 'challengeDB',function($scope, challengeDB) {
  $scope.challenges = challengeDB.challenges;
}])

.controller('eventCtrl', ['$scope', 'challengeDB', '$routeParams', function($scope, challengeDB, $routeParams){
      $scope.isFull = true;
  $scope.challenge = challengeDB.challenges.find(function(challenge){
    return challenge.name == $routeParams.name;
  });
      $scope.challenge.ttl = $scope.challenge.done * 100/$scope.challenge.goal;
}]);