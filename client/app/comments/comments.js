

angular.module('myapp.comments', [])

.controller('commentsController', function($scope, $mdDialog , Comments  , $mdMedia) {
	  $scope.comments = {}
  $scope.addComment= function () {
    Comments.insert($scope.comments)
      .then(function () {
        $scope.status = 200 ;
       initializeComments()
      })
      .catch(function (error) {
        console.log(error);
      });
  };




  $scope.com = {};
  var initializeComments = function () {
    Comments.getAll($scope.com._id)
      .then(function (data) {
      	  	console.log(data) 
        $scope.com = data;
      })
  };

  // initializeTradeworker();



$scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showPrerenderedDialog = function(ev ,tradeworker) {
    $scope.newData = tradeworker ;
    $mdDialog.show({
      contentElement: '#comments',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  } 


});
