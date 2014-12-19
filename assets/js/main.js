/**
 * Created by acidghost on 18/12/14.
 */

var app = angular.module('realtime.guestbook', ['ui.router', 'ui.bootstrap', 'realtime.guestbook.controllers', 'realtime.guestbook.services']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/messages');

  $stateProvider
    .state('messages', {
      url: '/messages',
      templateUrl: 'templates/home.html',
      controller: 'ListMessagesCtrl'
    })
    .state('messages.new', {
      url: '/new',
      templateUrl: 'templates/new.html',
      controller: 'NewMessageCtrl'
    });

});
