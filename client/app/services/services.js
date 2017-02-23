angular.module('myapp.services', [])
.factory('User', function ($http, $location, $window) {
 
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };


  var signout = function () {
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    signout: signout
  };
})
.factory('Tradeworker',function ($http, $location) {

  var insert = function (tradeworker) {
    return $http({
      method : 'POST',
      url : '/api/insert',
      data : tradeworker
    }).then(function (resp) {
      return resp.data
    })
  }

  var getAll = function () {
    return $http({
      method : 'GET',
      url : '/api/all'
    }).then(function (resp) {
      return resp.data
    })
     $location.path('/home');
  }

  return {
    insert : insert,
    getAll : getAll
  }
})

.factory('Comments',function ($http, $location,$window) {
  var insert = function (Comment) {
    console.log(Comment)
  // var newComment = {text:Comment,
  //   postedBy:window.localStorage.userId,
  //   tradeworkerId:window.localStorage._id}
  //   console.log(newComment.text)
    return $http({
      method : 'POST',
      url : '/api/insertC',
      data : Comment
    }).then(function (resp) {
      return resp.data
    })
  }

  var getAll = function (id) {
    return $http({
      method : 'GET',
      url : '/api/allC'
    }).then(function (resp) {
      return resp.data
    })
  }

  return {
    insert : insert,
    getAll : getAll
  }
})



// rating factory 
.factory('Rating',function ($http, $location,$window) {
  var insert = function (rate) {
    // console.log(window.localStorage.userId)
  var newRate = {value:rate,
    postedBy:window.localStorage.userId,
    tradeworkerId:window.localStorage._id}
   
    return $http({
      method : 'POST',
      url : '/api/insertR',
      data : newRate
      console.log(newRate)
    }).then(function (resp) {
      return resp.data
    })
  }

  var getAll = function (id) {
    return $http({
      method : 'POST',
      url : '/api/allR' + window.localStorage._id
    }).then(function (resp) {
      return resp.data
    })
  }

  return {
    insert : insert,
    getAll : getAll
  }
})



