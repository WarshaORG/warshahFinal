angular.module('myapp.ratingController',["jkAngularRatingStars"])

// .controller('ratingController',function($scope,$window) {

// 	$scope.ctrl = {};
// 	$scope.ctrl.onRating = function(r){
// 		console.log(r);
// 	}

// 	  })
	 



.controller('ratingController', function($scope, $mdDialog , Rating, $mdMedia, $window) {
	  $scope.comments = {}
  $scope.ctrl= {};

  $scope.ctrl.onRating= function (commentValue) {
    Rating.insert(commentValue)
      .then(function () {
       initializeComments()
      })
      .catch(function (error) {
        console.log(error);
      });
  };




   var initializeComments = function () {
    Rating.getAll(window.localStorage._id)
      .then(function (data) {
    console.log(window.localStorage._id)
        console.log(data + " test")
        $scope.com = data;
      })
  };



	 