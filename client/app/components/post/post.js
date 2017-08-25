(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('post', post);

    function post() {
        return {
            controller: postCtrl,
            link: link,
            restrict: 'E',
            scope: {
                post: '=',
                profile: '='
            },
            templateUrl: 'components/post/post.html'
        };

        function link(scope, element, attrs) {

        }
    }

    function postCtrl($scope, $location, DB) {
        $scope.isUserDonate = function(challengeName){
            var challenage = DB.challenges.find(function(ch){
                return ch.name == challengeName;
            });
            if(challenage) {
                return challenage.complitedUsers.indexOf('lior_strichash') != -1;
            }
            return false;
        };

        $scope.moveToChallenge = function(challengeName){
            $location.path('/event/' + challengeName);
        };
    }

})();

