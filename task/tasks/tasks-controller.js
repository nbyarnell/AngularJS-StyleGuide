var module = angular.module('App.Task', ['App.Project', 'ui.router']);

module.controller( 'Tasks', ($scope, tasks, project) => {
  $scope.tasks = tasks;
  $scope.tasks = project;
});