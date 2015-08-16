angular.module('NoteWrangler')
.controller('NotesCreateController', function($scope, Note) {
  $scope.note = new Note();

  $scope.saveNote = function(note){
    $scope.errors = null;
    $scope.updating = true;

    note.$save(note)
    // Note.create(note)       - old method without $resource
    .catch(function(note) {
      $scope.errors = [note.data.error];
    }).finally(function(){
      $scope.updating = false;
    });

    // $http({method: 'POST', url: '/notes', data: note});
  };
});
