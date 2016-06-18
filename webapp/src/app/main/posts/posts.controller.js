(function() {
  'use strict';

  angular
    .module('webappTodo')
    .controller('PostController', TodoController);


  /** @ngInject */
  function TodoController($mdSidenav, $location, Auth, $http, urlApi) {

    var vm = this;

    vm.posts = [];

    vm.categorias =[
      {nome: 'cat 1', id: 1},
      {nome: 'cat 2', id: 2},
      {nome: 'cat 3', id: 3},
      {nome: 'cat 4', id: 4}
    ];

    vm.toggleRight = togglerSideNav;
    vm.close       = closeSideNav;

    activate();

    function togglerSideNav() {
        $mdSidenav('right')
          .toggle()
          .then(function () {
          });
    }

    function closeSideNav(){

      $mdSidenav('right').close()
        .then(function () {
        });

    }

    function activate() {

//      if( ! Auth.check() ){
//        $location.url('login');
//      }

        $http.get(urlApi + '/posts').then(function(result){
            vm.posts  = result.data;
        });



    }

  }

})();
