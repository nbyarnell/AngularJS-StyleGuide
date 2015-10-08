var module = angular.module('App.Guest', ['ui.router']);

module.config(function($stateProvider) {
  $stateProvider.state('guest', {
    templateUrl: 'modules/Guest/guest.html',
    abstract: true
  });
});
