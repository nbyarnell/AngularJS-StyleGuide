var module = angular.module('App.Task', ['App.Project', 'ui.router']);

module.controller( 'TaskHeader', ($scope, task, project) => {
  $scope.tasks = project;
  $scope.task = task;
});