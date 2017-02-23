

angular.module('myapp.comments', [])

.controller('commentsController', function($scope, $mdDialog , Comments  , $mdMedia, $window) {
  $scope.com = {};
  $scope.comment = ''
  $scope.addComment= function (commentValue) {
     $scope.comment = commentValue
    Comments.insert($scope.comment)
      .then(function () {
       initializeComments()
      })
      .catch(function (error) {
        console.log(error);
      });
  };




  var initializeComments = function () {
    Comments.getAll(window.localStorage._id)
      .then(function (data) {
    console.log(data + " data")
        console.log(data + " test")
        $scope.com = data;
      })
  };
$scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showPrerenderedDialog = function(ev ,tradeworkerId) {
    $scope.newComment = tradeworkerId ;
     $window.localStorage._id = $scope.newComment
    console.log($scope.newComment + " comments")
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
