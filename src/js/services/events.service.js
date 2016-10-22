export default class Events {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;


  }

  /*
    Config object spec:

    {
      type: String [REQUIRED] - Accepts "all", "feed"
      filters: Object that serves as a key => value of URL params (i.e. {author:"ericsimons"} )
    }
  */
  query(config) {
    // Create the $http object for this request
    let request = {
      url: this._AppConstants.api.list  + ((config.type === 'feed') ? '/feed' : ''),
      method: 'GET',
      params: config.filters ? config.filters : null
    };
    return this._$http(request).then((res) => res.data);
  }

  get(id) {
    let deferred = this._$q.defer();

    if (!id.replace(" ", "")) {
      deferred.reject("Event data is invalid");
      return deferred.promise;
    }

    this._$http({
      url: this._AppConstants.api.item  + id,
      method: 'GET'
    }).then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
    );

    return deferred.promise;
  }

  destroy(slug) {
    return this._$http({
      url: this._AppConstants.api + '/events/' + slug,
      method: 'DELETE'
    })
  }

  save(event) {
    let request = {};

    if (event.slug) {
      request.url = `${this._AppConstants.api}/events/${event.slug}`;
      request.method = 'PUT';
      delete event.slug;

    } else {
      request.url = `${this._AppConstants.api}/events`;
      request.method = 'POST';
    }

    request.data = { event: event };

    return this._$http(request).then((res) => res.data.event);
  }


  favorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/events/' + slug + '/favorite',
      method: 'POST'
    })
  }

  unfavorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/events/' + slug + '/favorite',
      method: 'DELETE'
    })
  }


}
