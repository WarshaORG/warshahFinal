 angular.module('myapp',[
 	'myapp.services',
	'myapp.TradeworkerController',
	'myapp.ratingController',
	'myapp.user',
	'ngRoute',
	'ngMaterial',
	'myapp.comments',
	'jkAngularRatingStars'

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
		templateUrl:'tradeworker/tradeworker.html',
		controller:'TradeworkerController'                 
	})
	.otherwise({
		redirectTo:'/signin'
	})	
})
