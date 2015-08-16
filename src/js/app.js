angular.module('NoteWrangler', ['ngRoute', 'ngResource'])
.config(function($routeProvider){
  $routeProvider
  .when('/notes', {
    templateUrl: '/templates/pages/notes/index.html',
    controller: 'NotesIndexController'
  })
  .when('/users', {
    templateUrl: 'templates/pages/users/index.html',
    controller: 'UsersIndexController'
  })
  .when('/notes/new', {
    templateUrl: 'templates/pages/notes/new.html',
    controller: 'NotesCreateController',
    controllerAs: 'notesCreate'
  })
  .when('/notes/:id', {
    templateUrl: 'templates/pages/notes/show.html',
    controller: 'NotesShowController'
  })
  .when('/notes/:id/edit', {
    templateUrl: 'templates/pages/notes/edit.html',
    controller: 'NotesEditController'
  })
  .when('/', {
    redirectTo: '/users'
  })
  .otherwise({redirectTo: '/notes'});
});
