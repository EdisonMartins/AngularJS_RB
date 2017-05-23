//Busca o módulo
//Registra o serviço com o identificador: operadorasAPI

angular.module('listaTelefonica').service('operadorasAPI', function($http, config){
	this.getOperadoras = function(){
		return $http.get(config.baseUrl + '/operadoras');
	};
});