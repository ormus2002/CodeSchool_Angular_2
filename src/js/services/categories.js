angular.module('NoteWrangler')
.factory("Category", function CategoryFactory($resource) {
  return $resource("http://localhost:3000/api/categories/:id", {}, {
    update: {
      method: "PUT"
    }
  });
});