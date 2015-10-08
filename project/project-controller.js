var module = angular.module('App.Project', ['ui.router', 'ui.bootstrap'])

module.controller( 'Project', ($scope, project) => {
  $scope.project = project;
});