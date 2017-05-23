angular.module('listaTelefonica').directive('uiAlert', function(){
	return {
		templateUrl: "view/alert.html"
		replace: true,
		restrict: "E" // Elemento
		scope: {
			title = "@title", 

		},

		transclude: true;

	};
});