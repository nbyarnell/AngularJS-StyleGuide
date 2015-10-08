var module = angular.module('App.Project', ['ui.router', 'ui.bootstrap'])

module.controller( 'ProjectForm', ($scope, project) => {
  // injected `project` is either a new object or an existing object
  $scope.project = project;
});
