(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('challenge', challenge);

    function challenge() {
        return {
            controller: challengeCtrl,
            link: link,
            restrict: 'E',
            scope: {
                challenge: '='
            },
            templateUrl: 'components/challenge/challenge.html'
        };

        function link(scope, element, attrs) {

        }
    }

    function challengeCtrl($scope, $location,$interval, DB) {
        $scope.challenge.ttl = $scope.challenge.done * 100/$scope.challenge.goal;
        $scope.challenge.ttlPercentage = $scope.challenge.ttl + '%';
        $scope.challenge.daysToGo = Math.round(($scope.challenge.deadLine - Date.now()) / 1000 / 60 / 60 / 24);
        $scope.challenge.raisedMoney = Math.round($scope.challenge.done * 4) + '$';
        $scope.moveToChallenge = function(challengeName){
            $location.path('/event/' + challengeName);
        };

        var loggedInUser = DB.profiles.find(function(pro){
            return pro.username == 'lior_strichash';
        });

        $scope.currentWish = loggedInUser.wishList.find(function(wish){
            return wish.challengeName == $scope.challenge.name;
        });
        if($scope.currentWish) {
            // Update the count down every 1 second
            var x = $interval(function () {

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
                    $interval.cancel(x);
                    $scope.countdown = "EXPIRED";
                }
            }, 1000);
        }
    }

})();

