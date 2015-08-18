angular.module("NoteWrangler")
.directive("nwCategorySelect", function(Category) {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: "templates/directives/nw-category-select.html",

    scope: {
      activeCategory: "="
    },

    link: function(scope, element, attrs) {
      scope.categories = Category.query();
    },

    controller: function($scope) {
      this.setActiveCategory = function(category) {
        $scope.activeCategory = category.id;
      };
      this.getActiveCategory = function() {
        return $scope.activeCategory;
      };
      return this;
    }
  };
});