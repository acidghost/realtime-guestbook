/**
 * Created by acidghost on 18/12/14.
 */

var app = angular.module('realtime.guestbook', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    });

});
