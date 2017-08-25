'use strict';
var timer;
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

.controller('fastPost', ['$scope', '$mdDialog', 'DB', function($scope, $mdDialog, DB){
      $scope.createPost = function (challenge){
        challenge = challenge || {
          name: ''
        };
        $mdDialog.show({
          controller: function($scope, challenge){
            $scope.challenge = challenge;
            $scope.post = {
              challengeName: '#' + challenge.name,
              forward: '@'
            };
            $scope.uploadMedia = function(){
              $scope.post.challengeName = $scope.post.challengeName.slice(1);
              var cha = DB.challenges.find(function(ch){
                return ch.name == $scope.post.challengeName;
              });
              if(cha && cha.defaultMedia){
                $scope.post.media = cha.defaultMedia;
              }
              else{
                $scope.post.media = 'static/homePosts/rolling1.gif'
              }
            };
            $scope.uploadPost = function(post){
              post.profile = {
                username:  'lior_strichash',
                image: 'static/1905954410403422527630489170767033179457648n.jpg'
              };
              var forwardProfile = DB.profiles.find(function(pro){
                return pro.username == post.forward.slice(1);
              });
              if(forwardProfile){
                post.forward = {
                  username: forwardProfile.username,
                  image: forwardProfile.image
                }
              }
              DB.posts.push(post);
              DB.profile.wishList = DB.profile.wishList.filter(function(wish){
                return wish.challengeName == post.challengeName;
              });
              $interval.cancel(timer);
              DB.challenges.find(function(ch){
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

.controller('eventsCtrl', ['$scope', 'DB',function($scope, DB) {
  $scope.challenges = DB.challenges;
}])

.controller('eventCtrl', ['$scope', 'DB', '$routeParams', '$mdDialog', '$interval', function($scope, DB, $routeParams, $mdDialog, $interval){
      $scope.isFull = true;
      $scope.challenge = DB.challenges.find(function(challenge){
        return challenge.name == $routeParams.name;
      });
      $scope.challenge.ttl = $scope.challenge.done * 100/$scope.challenge.goal;
      $scope.challenge.ttlPercentage = $scope.challenge.ttl + '%';
      $scope.challenge.daysToGo = Math.round(($scope.challenge.deadLine - Date.now()) / 1000 / 60 / 60 / 24);
      $scope.challenge.raisedMoney = Math.round($scope.challenge.done * 4) + '$';
      var thisScope = $scope;
      $scope.relatedPosts = DB.posts.filter(function(post){
        return post.challengeName == $scope.challenge.name;
      });

      $scope.createPost = function (challenge){
        challenge = challenge || {
              name: ''
            };
        $mdDialog.show({
          controller: function($scope, challenge){
            $scope.challenge = challenge;
            $scope.post = {
              challengeName: '#' + challenge.name,
              forward: '@'
            };
            $scope.uploadMedia = function(){
              $scope.post.challengeName = $scope.post.challengeName.slice(1);
              var cha = DB.challenges.find(function(ch){
                return ch.name == $scope.post.challengeName;
              });
              if(cha && cha.defaultMedia){
                $scope.post.media = cha.defaultMedia;
              }
              else{
                $scope.post.media = 'static/homePosts/rolling1.gif'
              }
            };
            $scope.uploadPost = function(post){
              post.profile = {
                username:  'lior_strichash',
                image: 'static/1905954410403422527630489170767033179457648n.jpg'
              };
              var forwardProfile = DB.profiles.find(function(pro){
                return pro.username == post.forward.slice(1);
              });
              if(forwardProfile){
                post.forward = {
                  username: forwardProfile.username,
                  image: forwardProfile.image
                }
              }
              DB.posts.push(post);
              var loggedInUser = DB.profiles.find(function(pro){
                return pro.username == 'lior_strichash';
              });
              loggedInUser.wishList = loggedInUser.wishList.filter(function(wish){
                return wish.challengeName != post.challengeName;
              });
              thisScope.currentWish = false;
              $interval.cancel(timer);
              DB.challenges.find(function(ch){
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
            $scope.acceptChallenge = function(challenge){
              DB.profiles.find(function(pro){
                return pro.username == 'lior_strichash';
              }).wishList.push({
                challengeName: challenge.name,
                deadLine: new Date().setDate(new Date().getDate() + 1)
              });
              startTimer();
              $mdDialog.cancel();
              thisScope.accepted = true;
            };
          },
          locals: {
            challenge: challenge
          },
          templateUrl: 'components/challenge/assign.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true
        });
      };
      startTimer();
      function startTimer() {
        var loggedInUser = DB.profiles.find(function (pro) {
          return pro.username == 'lior_strichash';
        });

        $scope.currentWish = loggedInUser.wishList.find(function (wish) {
          return wish.challengeName == $scope.challenge.name;
        });
        $scope.accepted = !!$scope.currentWish;
        if ($scope.currentWish) {
          // Update the count down every 1 second
          timer = $interval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = new Date($scope.currentWish.deadLine).getTime() - now;

            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $scope.countdown = hours + ":" + minutes + ":" + seconds;

            // If the count down is finished, write some text
            if (distance < 0) {
              $interval.cancel(timer);
              $scope.countdown = "EXPIRED";
            }
          }, 1000);
        }
      }
}]);