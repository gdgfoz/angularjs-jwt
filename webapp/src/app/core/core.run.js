

(function() {
  'use strict';

  angular
    .module('gdgfoz.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.info('Run core');

  }

})();
