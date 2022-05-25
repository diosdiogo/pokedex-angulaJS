app.service('apiService', ['$http', function($http) {

    const API = ""
    const token = ""


    //Buscar sorteados
    this.ramdonUserList = function(callback) {
        var req = {
            method: 'GET',
            url: API + "roulette/ramdonUserList",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + `${token}`

            },

        }
        var response = $http(req);

        response.then(function(data) {
            callback({ isValid: true, data: data })
        })
        response.catch((data) => {
            callback({ isValid: false, msg: "Erro ao requisitar servidor!" })
        })
    }

    //buscar patrocinadores para sorteio
    this.customerOrderList = function(callback) {
        var req = {
            method: 'GET',
            url: API + "roulette/customerOrderList",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + `${token}`
            },
        }
        var response = $http(req);

        response.then(function(data) {
            callback({ isValid: true, data: data.data.data })
        })
        response.catch((data) => {
            callback({ isValid: false, msg: "Erro ao requisitar servidor!" })
        })
    }

    //registrar telespectadores
    this.register = function(data, callback) {
        var req = {
            method: 'POST',
            url: API + "roulette/register",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + `${token}`

            },
            data: data

        }
        var response = $http(req);

        response.then(function(data) {

            callback({ isValid: true, data: data })
        })
        response.catch((data) => {
            const rest = data.data;
            console.log(rest)
            if (rest.error.email) {
                callback({ isValid: false, msg: rest.error.email[0] })
            } else if (rest.error.whatsapp) {
                callback({ isValid: false, msg: rest.error.whatsapp[0] })
            }
        })
    }

    //Ganhado e premio
    this.winner = function(data, callback) {
        var req = {
            method: 'POST',
            url: API + "roulette/winner",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + `${token}`

            },
            data: data

        }
        var response = $http(req);
        response.then(function(data) {
            callback({ isValid: true, data: data })
        })
        response.catch((data) => {
            callback({ isValid: false, msg: "Erro ao requisitar servidor!" })
        })
    }
}])