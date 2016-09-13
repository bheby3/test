app.controller('splashCtrl', function ($state, $scope, whoismyrepsvc) {

    $scope.senators = [];
    $scope.representatives = [];
    $scope.states = [
        'AZ',
        'UT'
    ];

  $scope.getStateRep = function(select) {
      if (select.state && select.senator) {
        $scope.getSenByState(select);
      }
      if (select.state && select.representative) {
        $scope.getRepsByState(select);
      }
  };

    $scope.getRepsByState = function (state) {
        console.log('getRepsByState', state);

        whoismyrepsvc.findRepresentativesByState(state)
          .then(function (response) {
              console.log(response);
              $scope.representatives = response;
          })
    };

    $scope.getSenByState = function (state) {
        console.log('getSenByState', state);
        whoismyrepsvc.findSenatorsByState(state)
          .then(function (response) {
              console.log(response);
              $scope.senators = response;
          })
    };
/*


    $scope.user = false;

    $scope.openSignUpModal = function () {
        ModalService.showModal({
            templateUrl: "./app/modals/signup/signup.ctrl.html",
            controller: "signUpCtrl"
        }).then(function (modal) {
            modal.close.then(function (then) {
            });
        });
    };

    $scope.submitLogin = function (hero) {
      authService.login(hero)
        .then(function (response) {
          if (!response.data) {
              modalService.alert(response);
          }
          xpService.addAndUpdate(response.data, 1);
          $state.go('home');
        });
    };*/

});
