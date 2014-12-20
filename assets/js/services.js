/**
 * Created by acidghost on 19/12/14.
 */

var services = angular.module('realtime.guestbook.services', ['ngResource']);

services.factory('Messages', ['$resource', function($resource) {

  return $resource('api/v1/messages/:id', {}, {
    query: {
      method: 'GET',
      isArray: true,
      url: 'api/v1/messages?sort=createdAt+DESC'
    }
  });

}]);
