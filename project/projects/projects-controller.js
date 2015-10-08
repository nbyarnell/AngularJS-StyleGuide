var module = angular.module('App.Project', ['ui.router', 'ui.bootstrap'])

module.controller( 'Projects', ($scope, projects) => {
  $scope.projects = projects;
});