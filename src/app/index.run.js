(function() {
  'use strict';

  angular
    .module('upalette')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
