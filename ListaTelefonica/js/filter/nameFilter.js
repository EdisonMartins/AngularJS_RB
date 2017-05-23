
angular.module('listaTelefonica').filter('name', function(){

	return function(input){
			var listaDeNomes = input.split(" ");
			var listaDeNomesFormatada = listaDeNomes.map(function(nome){
				if(/(da|de)/.test(nome)) return nome;
				return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
			});
			console.log(listaDeNomesFormatada);
			//Coloca entra cada elemento do array o que estiver dentro do join.
		return listaDeNomesFormatada.join(" ");
	};

});