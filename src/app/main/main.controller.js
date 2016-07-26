(function() {
  'use strict';

  angular
    .module('upalette')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, colorPalette, toastr, $uibModal) {
    var vm = this;

    vm.palettes = [];
    vm.classAnimation = '';
    vm.creationDate = 1469362564167;
    vm.showToastr = showToastr;
    vm.addColor = addColor;
    activate();

    function activate() {
      getColorPalettes();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getColorPalettes() {
      vm.palettes = colorPalette.getPalettes();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function addColor(palette, color) {
      console.log('add new color the palette');
    }

  }
})();
