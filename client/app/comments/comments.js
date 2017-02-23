

angular.module('myapp.comments', [])

.controller('commentsController', function($scope, $mdDialog , Comments  , $mdMedia) {
	  $scope.comments = {}
  $scope.com = {};
  $scope.comment = {}
  $scope.addComment= function (commentValue,id) {
    Comments.insert($scope.comments)
      .then(function () {
        $scope.comment = commentValue
        console.log($scope.comment)
       initializeComments()
      })
      .catch(function (error) {
        console.log(error);
      });
  };




  var initializeComments = function () {
    Comments.getAll($scope.com._id)
      .then(function (data) {
          console.log(data)
        $scope.com = data;
      })
  };
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
