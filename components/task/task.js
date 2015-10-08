/*
Task Module
============
*/
var module = angular.module('App.Task', ['App.Project', 'ui.router']);

module.config( ($stateProvider) => {
  $stateProvider.state( 'tasks', {
    parent: 'project',
    url: '/tasks',
    templateUrl: 'modules/Task/Tasks.html',
    controller: 'Tasks',
    resolve: {
      tasks: (Task, project) => Task.list(project.id)
    },
    // breadcrumbs resolved in authenticated state
    onEnter: function(breadcrumbs) {
      breadcrumbs.push({ label: 'Tasks', sref: 'tasks' });
    },
    onExit: function(breadcrumbs) {
      breadcrumbs.pop();
    }
  });

  $stateProvider.state( 'tasks.new', {
    url: '/new', // /projects/:projectId/tasks/new (state must be defined BEFORE /:taskId)
    resolve: {
      task: (project) => project.newTask()
    },
    templateUrl: 'modules/Task/Form.html',
    controller: 'TaskForm',
    // breadcrumbs resolved in authenticated state
    onEnter: function(breadcrumbs) {
      breadcrumbs.push({ label: 'New', sref: 'tasks.new' });
    },
    onExit: function(breadcrumbs) {
      breadcrumbs.pop();
    }
  });

  $stateProvider.state( 'task', {
    parent: 'tasks',
    url: '/:taskId', // /projects/:projectId/tasks/:taskId (state must be defined AFTER /new)
    views: {
      '': { // projects.html: <ui-view></ui-view>
        templateUrl: 'modules/Task/task.html',
        controller: 'Task'
      },
      'header@project': { // Project/project.html: <ui-view name="header"></ui-view>
        templateUrl: 'modules/Task/task-header.html',
        controller: 'TaskHeader'
      }
    },
    resolve: {
      task: (project, $stateParams) => project.getTask($stateParams.taskId)
    },
    onEnter: function(task, breadcrumbs) {
      task.open();
      breadcrumbs.push({ label: task.name, sref: 'task' });
    },
    onExit: function(task, breadcrumbs) {
      task.close();
      breadcrumbs.pop();
    }
  });

  $stateProvider.state( 'task.edit', {
    templateUrl: 'modules/Task/Form.html',
    controller: 'TaskForm'
  });
});