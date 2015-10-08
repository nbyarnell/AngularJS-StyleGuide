var module = angular.module('App.Login', ['ui.router', 'ui.bootstrap']);

module.controller('Login', ($scope, UserObject, Authentication, user, redirect) => {
  $scope.user = user;

  $scope.login = () => {
    Authentication.login($scope.user, $scope.rememberMe)
      .then( redirect, (response) => $scope.error = response);
  };
});
