class EventCtrl {
  constructor(event, $sce, $rootScope) {
    'ngInject';

    this.event = event;

    console.log(event);
    $rootScope.setPageTitle(this.event.label[0].value);

    this.event.body = $sce.trustAsHtml(this.event.description[1].value, {sanitize: true});
    var pos = this.event.location.point[0].Point.posList;
    console.log(pos);
    var latitude = pos.split(' ')[0];
    var longitude = pos.split(' ')[1];
    this.map = {
      center: {
        latitude: latitude,
        longitude: longitude
      },
      zoom: 11
    };

  }

  resetCommentForm() {
    this.commentForm = {
      isSubmitting: false,
      body: '',
      errors: []
    }
  }


}


export default EventCtrl;
