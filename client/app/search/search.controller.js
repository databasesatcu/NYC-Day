'use strict';

angular.module('nycDayApp')
  .controller('SearchCtrl', function ($scope, $http) {
    $scope.userEmail = '';
    $scope.userNeighborhood = '';

    $http.get('/api/data/neighborhood')
      .success(function(data) {
        $scope.neighborhoods = data;
      });
  });
