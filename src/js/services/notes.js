angular.module('NoteWrangler')
.factory("Note", function NoteFactory($resource) {
  return $resource("http://localhost:3000/api/notes/:id", {}, {
    update: {
      method: "PUT"
    }
  });
  // return {
  //   all: function() {
  //     return $http({method: 'GET', url: 'http://localhost:3000/api/notes'});
  //   },
  //   create: function(note) {
  //     return $http({method: 'POST', url: '/notes', data: note});
  //   }
  // }
});