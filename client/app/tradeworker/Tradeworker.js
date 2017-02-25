 angular.module('myapp.TradeworkerController',['ngMaterial'])

.controller('TradeworkerController',function ($scope,$http,$location, Tradeworker ,$mdDialog ,$mdMedia, $window){
	
  $scope.tradeworkers = {}
  $scope.addTradeworker = function () {
    Tradeworker.insert($scope.tradeworkers)
      .then(function () {
        $scope.status = 200 ;

       initializeTradeworker()
          $location.path('/home');


      })
      .catch(function (error) {
        console.log(error);
      });
  };



  $scope.trade = {};
  var initializeTradeworker = function () {
    Tradeworker.getAll()
      .then(function (data) {
        $scope.trade = data;
      })
  };

  initializeTradeworker();

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showPrerenderedDialogTradeworker = function(ev ,tradeworker) {
    $scope.newData = tradeworker ;
     $window.localStorage._id = $scope.newData._id
     console.log($scope.newData._id , "tradeworker")
    $mdDialog.show({
      contentElement: '#myDialog',
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