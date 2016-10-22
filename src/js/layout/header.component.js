class AppHeaderCtrl {
  constructor(AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;

    $scope.$watch('User.current', (newUser) => {
      this.currentUser = newUser;
    })
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
