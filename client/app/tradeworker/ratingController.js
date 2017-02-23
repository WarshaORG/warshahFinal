angular.module('myapp.ratingController',[])

.controller('ratingController',function(LS) {

	  this.greeting = "This is a localstorage demo app";
  this.value = LS.getData();
  this.latestData = function() {
    return LS.getData();
  };
  this.update = function(val) {
    return LS.setData(val);
  };
	 //    $scope.firstRate = 0;
	 //    $scope.total = 0 ;
	 //    $scope.avg = 0 ;
	 //    $scope.rate = [] ;
	 //    $scope.final = 0;
	 //    $scope.res = window.localStorage.final ;


	 //    $scope.init = function(){
	 //    	$scope.x = 0;
	 //    for (var i = 0; i < $scope.rate.length; i++) {
	 //    	$scope.x = $scope.total + $scope.rate[i]
	 //    	}
	 //    	$scope.total = $scope.x ; 
		// }


	 //    $scope.onItemRating = function(rating){
	 //    	$scope.rate.push($scope.firstRate)
	 //    	 $scope.init()
	 //    	 $scope.avg = $scope.total/$scope.rate.length ; 
	 //    	 $scope.final = Math.floor($scope.avg)
	 //    window.localStorage.setItem("ratingArr", $scope.rate );
	 //    window.localStorage.setItem("avg", $scope.avg );
	 //    window.localStorage.setItem("total", $scope.total );
	 //    window.localStorage.setItem("final", $scope.final );
	 //    console.log($scope.res)

	 //      alert('On Rating: ' + $scope.firstRate);
	 //    };

})