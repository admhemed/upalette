import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import EventPreview from './event-helpers/event-preview.component';
componentsModule.component('eventPreview', EventPreview);

import EventList from './event-helpers/event-list.component';
componentsModule.component('eventList', EventList);

import ListPagination from './event-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);

export default componentsModule;
