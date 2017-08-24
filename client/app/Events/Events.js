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

.controller('fastPost', ['$scope', '$mdDialog', 'challengeDB', 'postsDB', function($scope, $mdDialog, challengeDB, postsDB){
      $scope.createPost = function (challenge){
        $mdDialog.show({
          controller: function($scope, challenge){
            challenge = challenge || {};
            $scope.challenge = challenge;
            $scope.post = {
              challengeName: challenge.name,
              forward: '@'
            };
            $scope.uploadMedia = function(){
              $scope.post.media = 'static/rolling1.gif'
            };
            $scope.uploadPost = function(post){
              post.user = 'lior_strichash';
              postsDB.posts.push(post);
              challengeDB.challenges.find(function(ch){
                return ch.name == post.challengeName;
              }).complitedUsers.push('lior_strichash');
              $mdDialog.cancel();
            }
          },
          locals: {
            challenge: challenge
          },
          templateUrl: 'components/challenge/post.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true
        });
      };
}])

.controller('eventsCtrl', ['$scope', 'challengeDB',function($scope, challengeDB) {
  $scope.challenges = challengeDB.challenges;
}])

.controller('eventCtrl', ['$scope', 'challengeDB', '$routeParams', '$mdDialog', 'postsDB', function($scope, challengeDB, $routeParams, $mdDialog, postsDB){
      $scope.isFull = true;
      $scope.challenge = challengeDB.challenges.find(function(challenge){
        return challenge.name == $routeParams.name;
      });
      $scope.challenge.ttl = $scope.challenge.done * 100/$scope.challenge.goal;

      $scope.challenge.daysToGo = Math.round(($scope.challenge.deadLine - Date.now()) / 1000 / 60 / 60 / 24);
      $scope.challenge.raisedMoney = Math.round($scope.challenge.done * 4) + '$';
      var thisScope = $scope;
      $scope.createPost = function (challenge){
        $mdDialog.show({
          controller: function($scope, challenge){
            $scope.challenge = challenge;
            $scope.post = {
              challengeName: challenge.name,
              forward: '@'
            };
            $scope.uploadMedia = function(){
              $scope.post.media = 'static/rolling1.gif'
            };
            $scope.uploadPost = function(post){
              post.user = 'lior_strichash';
              postsDB.posts.push(post);
              challengeDB.challenges.find(function(ch){
                return ch.name == post.challengeName;
              }).complitedUsers.push('lior_strichash');
              $mdDialog.cancel();
            }
          },
          locals: {
            challenge: challenge
          },
          templateUrl: 'components/challenge/post.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true
        });
      };
      $scope.assign = function(challenge){
        $mdDialog.show({
          controller: function($scope, challenge){
            $scope.challenge = challenge;
            $scope.cancel = function(){
              $mdDialog.cancel();
            };
            $scope.post = function(challenge){
              thisScope.createPost(challenge);
            }
          },
          locals: {
            challenge: challenge
          },
          templateUrl: 'components/challenge/assign.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true
        });
      }
}]);