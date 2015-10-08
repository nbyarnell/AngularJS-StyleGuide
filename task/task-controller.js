var module = angular.module('App.Task', ['App.Project', 'ui.router']);

module.controller( 'Task', ($scope, task) => {
  $scope.task = task;
});