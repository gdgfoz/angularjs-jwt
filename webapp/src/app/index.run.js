(function() {
  'use strict';

  angular
    .module('webappTodo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $http, $location) {
    $log.info('Run block webtodo');
    //$log.info('O');
    
    $rootScope.$on('w3HttpInterceptor:loginRequired', function(){
       $location.url('login');
    });
    
  }

})();
