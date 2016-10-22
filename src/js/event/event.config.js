function EventConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.item', {
    url: '/item/:id',
    controller: 'EventCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'event/event.html',
    title: 'Event',
    resolve: {
      event: function(Events, $state, $stateParams) {
        return Events.get($stateParams.id).then(
          (event) => event,
          (err) => $state.go('app.home')
        )
      }
    }
  });

};

export default EventConfig;
