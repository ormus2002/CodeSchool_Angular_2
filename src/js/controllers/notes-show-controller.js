angular.module('NoteWrangler')
.controller('NotesShowController', function($http, $routeParams, Note) {

  $scope.note = Note.get({id: $routeParams.id});

  // Note.find($routeParams.id).success(function(data) {
  //   $scope.note = data;
  // });
  // $http({method: 'GET', url: '/notes/' + $routeParams.id}).success(function(data){
  //   controller.note = data;
  // });
});
