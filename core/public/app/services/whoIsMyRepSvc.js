var app = angular.module('app');

app.service('whoismyrepsvc', function ($http) {


  this.findRepresentativesByState = function (select) {
    // console.log('hit whoismyrepsvc', state);
    return $http({
      method: 'GET',
      url: '/representatives/' + select.state
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err.data;
      });
  };

  this.findSenatorsByState = function(select) {
    // console.log('hit findSenatorsByState whoismyrepsvc', state);
    return $http({
      method: 'GET',
      url: '/senators/' + select.state
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err.data;
      });
  }

});