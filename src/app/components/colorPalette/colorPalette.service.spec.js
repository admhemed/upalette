(function() {
  'use strict';

  describe('service colorPalette', function() {
    var colorPalette;

    beforeEach(module('upalette'));
    beforeEach(inject(function(_colorPalette_) {
      colorPalette = _colorPalette_;
    }));

    it('should be registered', function() {
      expect(colorPalette).not.toEqual(null);
    });

    describe('getPalettes function', function() {
      it('should exist', function() {
        expect(colorPalette.getPalettes).not.toEqual(null);
      });

      it('should return array of palettes', function() {
        var data = colorPalette.getPalettes();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length >= 3).toBeTruthy();
      });
    });
  });
})();
