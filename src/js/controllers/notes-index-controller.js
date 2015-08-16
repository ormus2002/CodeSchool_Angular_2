angular.module('NoteWrangler')
.controller("NotesIndexController", ['$scope', 'Note', function($scope, Note){
  $scope.notes = Note.query();
  // Note.all()
  // .success(function(data){
  //   $scope.notes = data;
  // });
}]);