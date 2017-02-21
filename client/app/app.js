 angular.module('myapp',[
 	'myapp.services',
	'myapp.TradeworkerController',
	'myapp.user',
	'myapp.home',
	'ngRoute',
	'ngMaterial'


])

.config(function($routeProvider, $httpProvider){
	console.log('in appppp')
	$routeProvider
	.when('/',{
		templateUrl:'app/user/login.html',
		controller:'userController'                  
	})
	.when('/home',{
		templateUrl:'app/home/home.html',
		controller:'userController'                  
	})
	.when('/signin',{
		templateUrl:'/app/user/login.html',
		controller:'userController'                  
	})
	.when('/signup',{
		templateUrl:'app/user/signup.html',
		controller:'userController'                  
	})
	.when('/addTradeworker',{
		templateUrl:'app/tradworker/tradworker.html',
		controller:'TradeworkerController'                 
	})
	.when('/getTradeworker',{
		templateUrl:'app/tradworker/tradworker.html',
		controller:'TradeworkerController'                 
	})
	.otherwise({
		redirectTo:'/signin'
	})
	
})

// .controller('checkCtrl'function (argument) {
// 	// body...
// })
