class EventListCtrl {
  constructor(Events, $scope) {
    'ngInject';

    this._Events = Events;

    this.setListTo(this.listConfig);


    $scope.$on('setListTo', (ev, newList) => {
      this.setListTo(newList);
    });

    $scope.$on('setPageTo', (ev, pageNumber) => {
      this.setPageTo(pageNumber);
    });

  }

  setListTo(newList) {
    // Set the current list to an empty array
    this.list = [];

    // Set listConfig to the new list's config
    this.listConfig = newList;

    this.runQuery();
  }

  setPageTo(pageNumber) {
    this.listConfig.currentPage = pageNumber;

    this.runQuery();
  }


 runQuery() {
    // Show the loading indicator
    this.loading = true;

    // Create an object for this query
    let queryConfig = {
      type: this.listConfig.type,
      filters: this.listConfig.filters || {}
    };

    // Set the limit filter from the component's attribute
    queryConfig.filters.limit = this.limit;

    // If there is no page set, set page as 1
    if (!this.listConfig.currentPage) {
      this.listConfig.currentPage = 1;
    }

    // Add the offset filter
    queryConfig.filters.offset = (this.limit * (this.listConfig.currentPage - 1));

    // Run the query
    this._Events
      .query(queryConfig)
      .then(
        (res) => {
          this.loading = false;

          // Update list and total pages
          this.list = res.event;
          this.listConfig.totalPages = Math.ceil(res.eventsCount / this.limit);
        }
      );
  }

}

let EventList = {
  bindings: {
    limit: '=',
    listConfig: '='
  },
  controller: EventListCtrl,
  templateUrl: 'components/event-helpers/event-list.html'
};

export default EventList;
