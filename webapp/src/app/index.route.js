(function() {
  'use strict';

  angular
    .module('webappTodo')
    .config(routeConfig);

  function routeConfig($routeProvider) {

    $routeProvider
      .when('/login', {
        templateUrl: 'app/main/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })     
      .when('/posts', {
        templateUrl: 'app/main/posts/posts.html',
        controller: 'PostController',
        controllerAs: 'vm'
      })

      .otherwise({
        redirectTo: '/posts'
      });
  }

})();
