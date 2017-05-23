angular.module('listaTelefonica').filter('ellipsis', function(){
	return function(input, size){
		if(input.length <= size) return input;

		//Se size for false, undefined, 0 ele irá assumir valor 2.
		var output = input.substring(0,size || 2) + "...";
		console.log(output);
		return output;
	};

});