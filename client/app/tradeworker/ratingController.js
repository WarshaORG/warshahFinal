angular.module('myapp.ratingController',["jkAngularRatingStars"])



.controller('ratingController', function($scope, $mdDialog , Rating, $mdMedia, $window) {
  $scope.ctrl= {};
  $scope.ctrl.rating = 0;
  $scope.ctrl.readOnly = true;
  //so scope.avg is what is being displayed as a rating in home.html 
  //I tried calling initializeRating for scope.avg but it gave me an error.
  $scope.ctrl.avg = function(){
  		initializeRating()
  };

  console.log($scope.ctrl.avg)

  $scope.ctrl.onRating= function (rateValue) {

      	console.log(rateValue)
    Rating.insert(rateValue)
   
      .then(function () {
		initializeRating() 
  })
      .catch(function (error) {
        console.log(error);
      });
  };




  	var ratings = 0;
  var initializeRating = function () {

     
    Rating.getAll(window.localStorage._id)
      .then(function (data) {
      	  $scope.ctrl.avg = 0;
  		for (var i = 0; i < data.length; i++) {
  			$scope.ctrl.avg+= data[i].value[0]
  		}
      	
      	return Math.floor($scope.ctrl.avg/data.length)
      })
      .catch(function (error) {
        console.error(error);
      });
  };


});

//    var avg = function () {
//    	   	var x = $scope.ratings Rating.getAll(window.localStorage._id)

//     Rating.getAll(window.localStorage._id)
//       .then(function (data) {
//       	console.log(x)
//         $scope.com = data;
//       })
//   };
// })



	 