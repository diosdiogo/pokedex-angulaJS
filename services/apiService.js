app.service('apiService', ['$http', function($http) {

    const API = "https://pokeapi.co/api/v2/"

    //Buscar Pokemon
    this.pokemonList = function(data,callback) {
        var req = {
            method: 'GET',
            url: API + `pokemon/?offset=${data.offset}&limit=${data.limit}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        var response = $http(req);

        response.then((data)=> {
            callback({ isValid: true, data: data })
        })
        response.catch((data) => {
            callback({ isValid: false, msg: "Erro ao requisitar servidor!" })
        })
    }
}])