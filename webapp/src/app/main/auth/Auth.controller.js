(function() {
  'use strict';

  angular
    .module('webappTodo')
    .controller('LoginController', LoginController);


  /** @ngInject */
  function LoginController($log, Auth, $location) {

    var vm = this;
    vm.user = {};

    vm.login = login;

    activate();

    //--------------------- Functions
    function login()
    {
        Auth.login(vm.user).then(function(isAuth){
          if(isAuth) $location.url('posts');
        });
    }

    function activate() {

    }

  }

})();
