

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
        $scope.com = data;
        // console.log( $scope.com, " comment")
      })
  };
$scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showPrerenderedDialogComment = function(ev ,tradeworker) {
    // window.localStorage.removeItem("_id")
    // console.log($scope.com,"we are here in the popup")
    $scope.tradeworkerid = tradeworker._id ;
     $window.localStorage._id = $scope.tradeworkerid
    console.log(window.localStorage._id, " comments")
    $mdDialog.show({
      contentElement: '#comments',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
    initializeComments()

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
