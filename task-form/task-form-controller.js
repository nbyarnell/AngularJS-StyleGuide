var module = angular.module('App.Task', ['App.Project', 'ui.router']);

module.controller( 'TaskForm', ($scope, task) => {
  // injected `task` is either a new object or an existing object
  $scope.task = task;
});
