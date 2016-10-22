import marked from 'marked';

class EventPreviewCtrl {
  constructor( $sce, $scope) {
    'ngInject';
    this.event.body  = $sce.trustAsHtml(marked(this.event.description[1].value, { sanitize: true }));


  }
}
let EventPreview = {
  bindings: {
    event: '='
  },
  controller: EventPreviewCtrl,
  templateUrl: 'components/event-helpers/event-preview.html'
};

export default EventPreview;
