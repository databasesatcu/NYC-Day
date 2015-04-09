'use strict';

angular.module('nycDayApp')
  .controller('SearchCtrl', function ($scope, $http) {
    $scope.showForm = true;
    $scope.showResult = false;

    var instantiate = function() {
      $scope.user = {};
      $scope.user.email = 'herbert@gmail.com';
      $scope.user.neighborhood = 'GREENWICH VILLAGE';
      $scope.user.priceRange = 10;
      $scope.user.cuisine = 'MEXICAN';
      $scope.user.start = '09:00';
      $scope.user.end = '20:00';
      $scope.user.gallery = 'GOYA';
    };

    instantiate();

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

      var searchObject = {
        neighborhood : $scope.user.neighborhood,
        cuisine      : $scope.user.cuisine,
        gallery      : $scope.user.gallery
      };

      $scope.result = {};

      // Food truck
      $http.post('/api/data/searchfoodtruckcuisine', searchObject).success(function(data) {
          $scope.result.foodtruck = {};
          if (data.length) {
            $scope.result.foodtruck.name = data[0].truck_name;
            $scope.result.foodtruck.address = data[0].trajectory;
            $scope.result.foodtruck.cuisine = data[0].cuisine;
          } else {
            console.log('first query failed.');
            $http.post('/api/data/searchfoodtruck', searchObject).success(function (data1) {
              $scope.result.foodtruck.name = data1[0].truck_name;
              $scope.result.foodtruck.address = data1[0].trajectory;
              $scope.result.foodtruck.cuisine = data1[0].cuisine;
            });
          }
        });

      // Restaurant
      $http.post('/api/data/searchrestaurantcuisine', searchObject).success(function(data) {
        $scope.result.restaurant = {};
        if (data.length) {
          $scope.result.restaurant.name = data[0].restaurant_name;
          $scope.result.restaurant.address = data[0].address;
          $scope.result.restaurant.cuisine = data[0].cuisine;
        } else {
          console.log('first query failed.');
          $http.post('/api/data/searchrestaurant', searchObject).success(function (data1) {
            $scope.result.restaurant.name = data1[0].restaurant_name;
            $scope.result.restaurant.address = data1[0].address;
            $scope.result.restaurant.cuisine = data1[0].cuisine;
          });
        }
      });

      // Museum
      $http.post('/api/data/searchmuseumgallery', searchObject).success(function(data) {
        $scope.result.museum = {};
        $scope.result.galleries = [];
        var museumName = '';
        if (data.length) {
          $scope.result.museum.name = data[0].museum_name;
          museumName = data[0].museum_name;
          $scope.result.museum.style = data[0].style;
          $scope.result.museum.gallery = data[0].gallery_name;

          $http.post('/api/data/searchgallery', { museum: museumName }).success(function (data2) {
            if (data2.length)
              $scope.result.galleries = data2;
            else
              $scope.result.galleries = [{gallery_name: "No galleries."}];
          });
        } else {
          console.log('first query failed.');
          $http.post('/api/data/searchmuseum', searchObject).success(function (data1) {
            $scope.result.museum.name = data1[0].museum_name;
            museumName = data1[0].museum_name;
            $scope.result.museum.style = data1[0].style;
            $scope.result.museum.gallery = data1[0].gallery_name;

            $http.post('/api/data/searchgallery', {museum: museumName}).success(function (data2) {
              if (data2.length)
                $scope.result.galleries = data2;
              else
                $scope.result.galleries = [{gallery_name: "No galleries."}];
            });
          });
        }
      });

      // New user data
      $http.post('/api/data/newuser', {
        username : $scope.user.email,
        interests : $scope.user.interests
      }).success(function () {
        console.log("new user entered!");
      });

      $scope.showForm = false;
      $scope.showResult = true;

    };


    $scope.resetForm = function() {
      instantiate();

      $scope.showResult = false;
      $scope.showForm = true;
    }
  });
