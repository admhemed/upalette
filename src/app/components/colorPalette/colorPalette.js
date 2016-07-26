(function() {
  'use strict';

  angular
      .module('upalette')
      .service('colorPalette', colorPalette);

  /** @ngInject */
  function colorPalette() {
    var data = [
      {
        'title': 'AngularJS',
        'description': 'HTML enhanced for web apps!',
        'image': 'angular.png',
        'colors': ['#b52e31','#000000']
      },
      {
        'title': 'Alphabet',
        'description': 'Alphabet Inc. is a holding company that gives ambitious projects the resources, freedom, and focus to make their ideas happen',
        'image': 'alphabet.jpg',
        'colors': ['#ed1c24']
      },
      {
        'title': 'Adobe',
        'description': 'Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.',
        'image': 'adobe.png',
        'colors': ['#ffffff','#000000','#ff0000']
      }
    ];

    this.getPalettes = getPalattes;

    function getPalattes() {
      return data;
    }
  }

})();
