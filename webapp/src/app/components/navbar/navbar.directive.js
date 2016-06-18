(function() {
  'use strict';

  angular
    .module('webappTodo')
    .directive('wtNavbar', navbarDirective);

  /** @ngInject */
  function navbarDirective() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          title: '='
      }
      // controller: NavbarController,
      // controllerAs: 'vm',
      // bindToController: true
    };

    return directive;

    /** @ngInject */
    // function NavbarController() {
    //   var vm = this;
    // }

  }

})();
