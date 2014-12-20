/**
 * Created by acidghost on 19/12/14.
 */

var controllers = angular.module('realtime.guestbook.controllers', []);

controllers.controller('ListMessagesCtrl', ['$scope', 'Messages', function($scope, Messages) {

  Messages.query({}, function(datas) {
    $scope.messages = datas;
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
    Messages.save(datas, function() {
      datas.createdAt = new Date;
      $scope.messages.unshift(datas);
      $state.go('messages');
    });
  };

}]);
