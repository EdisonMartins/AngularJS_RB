angular.module('listaTelefonica').config(function(serialGeneratorProvider){
	serialGeneratorProvider.setLength(3);
	console.log(serialGeneratorProvider.getLength());
});