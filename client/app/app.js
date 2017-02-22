 angular.module('myapp',[
 	'myapp.services',
	'myapp.TradeworkerController',
	'myapp.user',
	'ngRoute',
	'ngMaterial',
	'myapp.comments'


])

.config(function($routeProvider, $httpProvider){
	// console.log('in appppp')
	$routeProvider
	.when('/',{
		templateUrl:'app/user/login.html',
		controller:'userController'                  
	})
	.when('/home',{
		templateUrl:'app/home/home.html',
		controller:'TradeworkerController'                  
	})
	.when('/signin',{
		templateUrl:'/app/user/login.html',
		controller:'userController'                  
	})
	.when('/signup',{
		templateUrl:'app/user/signup.html',
		controller:'userController'                  
	})

	.when('/tradeworker',{
		templateUrl:'app/tradeworker/tradeworker.html',
		controller:'TradeworkerController'                 
	})
	.otherwise({
		redirectTo:'/signin'
	})	
})
