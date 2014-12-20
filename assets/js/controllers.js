/**
 * Created by acidghost on 19/12/14.
 */

var controllers = angular.module('realtime.guestbook.controllers', []);

controllers.controller('ListMessagesCtrl', ['$scope', 'Messages', function($scope, Messages) {

  /*
  Messages.resource.query({}, function(datas) {
    $scope.messages = datas;
  });
  */
  Messages.socket.query(function(messages) {
    console.log(messages.length + ' messages');
    $scope.messages = messages;
    $scope.$apply($scope.messages);
  });

  io.socket.on('message', function(data) {
    console.log('New message!');
    $scope.messages.unshift(data.data);
    $scope.$apply($scope.messages);
  });

}]);

controllers.controller('NewMessageCtrl', ['$scope', '$state', '$window', 'Messages', function($scope, $state, $window, Messages) {

  $scope.author = $scope.content = "";

  $window.scrollTo(0, $window.innerHeight);

  $scope.sendMessage = function() {
    var datas = {
      author: $scope.author,
      content: $scope.content
    };
    Messages.resource.save(datas, function() {
      datas.createdAt = new Date;
      //$scope.messages.unshift(datas);
      $state.go('messages');
    });
  };

}]);
