angular.module('myapp.ratingController',["jkAngularRatingStars"])



.controller('ratingController', function($scope, $mdDialog , Rating, $mdMedia, $window) {
  $scope.ctrl= {};
  $scope.ctrl.rating = 0;
  $scope.ctrl.readOnly = true;
  //so scope.avg is what is being displayed as a rating in home.html 
  //I tried calling initializeRating for scope.avg but it gave me an error.
  $scope.ctrl.avg = initializeRating

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




  var total = 0
  var initializeRating = function () {

     
    Rating.getAll(window.localStorage._id)
      .then(function (data) {
      	total = 0;
      	$scope.ctrl.avg =0;
  		for (var i = 0; i < data.length; i++) {
  			total += data[i].value[0]
  		}
      	
      	$scope.ctrl.avg = Math.floor(total/data.length)
      	console.log($scope.ctrl.avg)
      	return $scope.ctrl.avg
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



	 