(function() {
  'use strict';

  angular
    .module('upalette')
    .directive('palette', palette);

  /** @ngInject */
  function palette(
  //  palette
  ) {
    var directive = {
      restrict: 'E',
      scope: {
      },
      templateUrl: "app/components/palette/palette.html" ,
      link: linkFunc,
      controller: PaletteController,
      controllerAs: 'vm',
      bindToController:{
        palette: '=',
        addColor: '<'
      }
    };

    return directive;

    function linkFunc(
      //scope, el, attr, vm
    ) {

    }

    /** @ngInject */
    function PaletteController() {
      var vm = this;
      vm.colorPickerEvents = {
        onBlur: function(api, color, $event) {
          console.log(color);
          vm.addColor(vm.palette, color);
          vm.palette.colors.push(color);
        }
      };
    }

  }

})();
