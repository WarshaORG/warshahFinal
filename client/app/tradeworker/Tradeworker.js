 angular.module('myapp.TradeworkerController',['ngMaterial'])

.controller('TradeworkerController',function ($scope,$http,$location, Tradeworker ,$mdDialog ,$mdMedia){
	
  $scope.tradeworkers = {}
  $scope.addTradeworker = function () {
    $scope.loading = true;
    Tradeworker.insert($scope.tradeworkers)
      .then(function () {
        $scope.status = 200 ;
       initializeTradeworker()
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  $scope.trade = {};
  var initializeTradeworker = function () {
    Tradeworker.getAll()
      .then(function (data) {
        $scope.trade = data[0];
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeTradeworker();

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showPrerenderedDialog = function(ev) {
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