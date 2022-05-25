var app = angular.module('pokedex', ['ngRoute']);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'pokedex.html',
        controller:'pokedexController'
    })
    
    .otherwise({
        redirectTo: '404.html'
    });
})
    