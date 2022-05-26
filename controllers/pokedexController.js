app.controller('pokedexController', ['$scope', '$rootScope', '$location', '$http', 'apiService', function ($scope, $rootScope, $location, $http, apiService) { 
    $scope.user = "Diogo Cesar"
    $scope.imagePokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.pageInit = 1;
    $scope.pageTotal = 0;
    $scope.busca = ''

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
                $scope.pageTotal = parseInt($scope.pokemon.data.count / $scope.limit)
                console.log($scope.pokemon)
            }
        })
    }

    $scope.nav = (e) => {
        switch (e) {
            case 'fp':
                $scope.offset = 0;
                $scope.pageInit = 1
                break
            case 'prev':
                if($scope.pageInit >= 1)
                    $scope.offset -= 20;
                    $scope.pageInit--
                break
            case 'next':
                if($scope.pageInit < $scope.pageTotal)
                    $scope.offset += 20;
                    $scope.pageInit++
                break
            case 'lp':
                $scope.offset = $scope.pokemon.data.count - 20;
                $scope.pageInit = $scope.pageTotal;
                break
            default:
                $scope.offset = 0;
        }
        
        if($scope.offset < 20){
            $scope.offset = 0;
            $scope.pageInit = 1
        }
        if($scope.pageInit > $scope.pageTotal){
            $scope.pageInit = $scope.pageTotal
        }
        init()
             
    }
    
    $scope.buscarPokemon = () =>{
        if($scope.busca === ''){
            init();
            return
        }
        apiService.pokemonBuscar($scope.busca, (data)=>{
            debugger
            if(data.isValid){
                $scope.pokemon = data.data;
                $scope.listaPokemon = data.data.data.results
                $scope.pageTotal = 1
                console.log($scope.pokemon)
            }
        })
    }
    init()
 }])