import angular from 'angular';

// Create the module where our functionality can attach to
let eventModule = angular.module('app.event', []);

// Include our UI-Router config settings
import EventConfig from './event.config';
eventModule.config(EventConfig);


// Controllers
import EventCtrl from './event.controller';
eventModule.controller('EventCtrl', EventCtrl);


export default eventModule;
