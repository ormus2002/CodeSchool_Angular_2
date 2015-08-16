angular.module("NoteWrangler")
.directive("nwCategorySelect", function(Category) {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: "templates/directives/nw-category-select.html",

    link: function(scope, element, attrs) {
      scope.categories = Category.query();
    },

    controller: function($scope) {
      this.setActiveCategory = function(category) {
        $scope.activeCategory = category.name;
      };
      this.getActiveCategory = function() {
        return $scope.activeCategory;
      };
      return this;
    }
  };
});