angular.module("NoteWrangler")
.directive("nwCard", ['$sce', function($sce) {
  var num = 1;
  return {
    restrict: "E",
    templateUrl: "templates/directives/nw-card.html",
    scope: {
      header: '=',
      body: '=',
      image: '='
    },
    controller: function($scope) {
      // $scope.header = "Note Title " + num++;
      // $scope.description = "Description";
    },
    link: function(scope, element, attr) {
      scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body));

      element.on("click", function() {
        element.find("p.ng-binding").toggleClass("hidden")
      });
      console.log(element);
    }
  }
}]);