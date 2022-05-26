app.service('apiService', ['$http', function($http) {

    const API = "https://pokeapi.co/api/v2/"

    //Buscar Pokemon Lista
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

    //Buscar Pokemon Nome
    this.pokemonBuscar = function(data,callback) {
        var req = {
            method: 'GET',
            url: API + `pokemon/${data}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        var response = $http(req);
        
        response.then((data)=> {
            if(data.data == undefined){
                callback({ isValid: false, msg: "Pokemon não encontrado" })
                return
            }
            resp ={
                data:{
                    count: 1,
                    results: [
                        {
                            name: data.data.species.name,
                            url: data.data.species.url,
                            img: data.data.sprites.front_default
                        }
                    ]
                }
            }
            callback({ isValid: true, data: resp })
        })
        response.catch((data) => {
            callback({ isValid: false, msg: "Erro ao requisitar servidor!" })
        })
    }
}])