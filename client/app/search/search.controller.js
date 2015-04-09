'use strict';

angular.module('nycDayApp')
  .controller('SearchCtrl', function ($scope, $http) {
    $scope.showForm = true;
    $scope.showResult = false;

    $scope.user = {};

    $scope.user.email = 'herbert@gmail.com';
    $scope.user.neighborhood = 'GREENWICH VILLAGE';
    $scope.user.priceRange = 10;
    $scope.user.cuisine = 'MEXICAN';
    $scope.user.start = '09:00';
    $scope.user.end = '20:00';
    $scope.user.gallery = 'GOYA';

    $http.get('/api/data/neighborhood')
      .success(function(data) {
        $scope.neighborhoods = data;
      });

    $http.get('/api/data/cuisines')
      .success(function (data) {
        $scope.cuisines = data;
      });

    $http.get('/api/data/gallery')
      .success(function (data) {
        $scope.galleries = data;
      });

    $scope.search = function () {
      $http.post('api/data/searchmuseum', {
        neighborhood : $scope.user.neighborhood,
        cuisine      : $scope.user.cuisine,
        gallery      : $scope.user.gallery
      }).success(function(data) {

        });

      $scope.showForm = false;
      $scope.showResult = true;
    };

  });
