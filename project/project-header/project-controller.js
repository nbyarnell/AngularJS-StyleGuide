var module = angular.module('App.Project', ['ui.router', 'ui.bootstrap'])

module.controller( 'ProjectHeader', ($scope, project) => {
  $scope.project = project;
});