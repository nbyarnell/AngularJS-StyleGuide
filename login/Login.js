/*
Login Module
============

In here we're demonstrating opening a modal upon entering a state (instead of swapping a view).
$modal is part of ui.bootstrap
*/

// Tracks the previous location and allows you to redirect back to that location
var previousLocation;

var module = angular.module('App.Login', ['ui.router', 'ui.bootstrap']);

module.config(function($stateProvider) {
  $stateProvider.state('login', {
    parent: 'guest',
    url: '/login',
    resolve: {
      user: (User) => new User(),
      redirect: ($location) => {
        return () => {
          // Note we're returning a function to be called later, that has the redirect info pre-filled
          // TODO: Change to state code
          $location.path( previousLocation );
        };
      },
      modal: ($modal) => $modal.open({
        templateUrl: 'modules/Authentication/login.html',
        controller: 'Login',
      })
    },
    onExit(modal) {
      modal.close();
    }
  });
});

module.run(function($rootScope, $location) {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    // TODO: Change to state code
    previousLocation = $location.path();
  });
});