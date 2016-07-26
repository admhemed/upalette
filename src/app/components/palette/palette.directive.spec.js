(function() {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * The `link` function is not tested.
   * (malarkey usage, addClass, $watch, $destroy)
   */
  describe('directive palette', function() {
    var vm;
    var el;
    var $log;
    var samplePalette = {
      'title': 'AngularJS',
      'description': 'HTML enhanced for web apps!',
      'image': 'angular.png',
      'colors': ['#b52e31','#000000']
    };

    beforeEach(module('upalette', function($provide) {
      $provide.value('$log', console);
    }));
    beforeEach(inject(function($compile, $rootScope,_$log_) {
      $log = _$log_;

      el = angular.element('<palette palette="samplePalette" add-color="addColor" ></palette>');
      var scope = $rootScope.$new();
      scope.samplePalette = samplePalette;
      scope.addColor = Function.prototype;
      $compile(el)(scope);
      $rootScope.$digest();
      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.find('.palette').length).toBe(1);
      expect(el.find('.color').length).toBe(samplePalette.colors.length);
      expect(el.find('.color-picker-input').length).toBe(1);
      expect(el.html()).not.toEqual(null);
    });

    it('should have palette data', function() {
      expect(vm).toEqual(jasmine.any(Object));
      $log.log(vm);
      $log.log(vm.addColor);
      expect(vm.palette).toEqual(samplePalette);
      expect(vm.addColor).toEqual(jasmine.any(Function));
    });

  });
})();
