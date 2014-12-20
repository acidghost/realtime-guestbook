/**
 * Created by acidghost on 18/12/14.
 */

var app = angular.module('realtime.guestbook', ['ui.router', 'ui.bootstrap', 'timer', 'realtime.guestbook.controllers', 'realtime.guestbook.services']);

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

app.run(['$window', function($window) {

  var spectrum = function() {
    colors = [
      'rgb(256,0,0)',
      'rgb(0,256,0)',
      'rgb(0,0,256)',
      'rgb(256,256,0)',
      'rgb(256,0,256)',
      'rgb(0,256,256)'
    ];
    hue2 = colors[(Math.floor(Math.random() * colors.length))];
    $('body').css('background-color', hue2);
  };

  spectrum();
  $window.setInterval(spectrum, 2000);

}]);
