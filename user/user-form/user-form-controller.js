var module = angular.module('App.User', ['ui.router', 'ui.validate']);

module.controller( 'UserForm', ($scope, user, wizard) => {
  $scope.user = user;
  $scope.wizard = wizard;
});
