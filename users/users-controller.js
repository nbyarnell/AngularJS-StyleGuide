var module = angular.module('App.User', ['ui.router', 'ui.validate']);

module.controller( 'Users', ($scope, users) => {
  $scope.users = users;
});