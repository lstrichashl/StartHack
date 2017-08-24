'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'Events/events.html',
    controller: 'eventsCtrl'
  });
}])

.controller('eventsCtrl', [function() {

}]);