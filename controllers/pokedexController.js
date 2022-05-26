app.controller('pokedexController', ['$scope', '$rootScope', '$location', '$http', 'apiService', function ($scope, $rootScope, $location, $http, apiService) { 
    $scope.user = "Diogo Cesar"
    $scope.offset = 0;
    $scope.limit = 20;

    $scope.listaPokemon = []
    $scope.pokemon = []

    init = () => {
        var data = {
            offset: $scope.offset,
            limit: $scope.limit
        }
        apiService.pokemonList(data, (data)=>{
            if(data.isValid){
                $scope.pokemon = data.data;
                $scope.listaPokemon = data.data.data.results
                console.log($scope.listaPokemon)
            }
        })
    }
    
    init()
 }])