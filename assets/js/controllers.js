/**
 * Created by acidghost on 19/12/14.
 */

var controllers = angular.module('realtime.guestbook.controllers', []);

controllers.controller('ListMessagesCtrl', ['$scope', 'Messages', function($scope, Messages) {

  $scope.messages = Messages.query();

}]);

controllers.controller('NewMessageCtrl', ['$scope', '$state', 'Messages', function($scope, $state, Messages) {

  $scope.author = $scope.content = "";

  $scope.sendMessage = function() {
    var datas = {
      author: $scope.author,
      content: $scope.content
    };
    Messages.save(datas, function() {
      datas.createdAt = new Date;
      $scope.messages.push(datas);
      $state.go('messages');
    });
  };

}]);
