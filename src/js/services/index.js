import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);



import EventsService from './events.service';
servicesModule.service('Events', EventsService);



export default servicesModule;
