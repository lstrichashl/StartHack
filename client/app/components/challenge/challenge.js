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

    function challengeCtrl($scope, $location) {
        $scope.challenge.ttl = $scope.challenge.done * 100/$scope.challenge.goal;
        $scope.challenge.hoursToGo = Math.round(($scope.challenge.deadLine - Date.now()) / 1000 / 60 / 60);
        $scope.challenge.raisedMoney = Math.round($scope.challenge.done * 4) + '$';
        $scope.moveToChallenge = function(challengeName){
            $location.path('/event/' + challengeName);
        }
    }

})();

