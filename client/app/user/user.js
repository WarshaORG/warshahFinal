angular.module('myapp.user',[])

.controller('userController',function ($scope,$http,$location,User ,$window){
    $scope.isLoggedIn = $window.localStorage.logged;
    $scope.user = {};
      $scope.signin = function () {
        User.signin($scope.user)
          .then(function (obj) {
           $window.localStorage.userId = obj.user._id
            $window.localStorage.setItem('token', obj.token);
            $window.localStorage.logged = true;
        $scope.isLoggedIn = $window.localStorage.logged
                
            $location.path('/home');
          })
          .catch(function (error) {
            console.error(error);
          });
      };

      $scope.signup = function () {
        User.signup($scope.user)
          .then(function (token) {
            $location.path('/home');
          })
          .catch(function (error) {
            console.error(error);
          });
      };


      
 $scope.logout = function () {
    console.log('hahahahahahah')
     User.signout();
   $window.localStorage.logged = false;
    $scope.isLoggedIn = $window.localStorage.logged;

      };


    
})