angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	//Underline é uma convenção que indica que a variável é privada.
	var _getContatos = function(){
		return $http.get(config.baseUrl + "/contatos");
	}

	var _saveContato = function(contato){
		return $http.post(config.baseUrl + "/contatos", contato);
	}

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});