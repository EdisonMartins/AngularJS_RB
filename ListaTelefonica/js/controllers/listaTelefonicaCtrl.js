		angular.module('listaTelefonica').controller("listaTelefonicaCtrl", function($scope, $filter, contatosAPI, operadorasAPI, serialGenerator) {
			console.log(serialGenerator.generate());
			$scope.app = "Lista Telefônica";

			//Arrays
			$scope.contatos = [];

			$scope.operadoras = [];

			//Funções
			var carregarContatos = function() {
				contatosAPI.getContatos().then(function (success){
					console.log("success")
					$scope.contatos = success.data;
				},function (error){

				});

			};


			var carregarOperadoras = function() {
				operadorasAPI.getOperadoras().then(function (success){
					console.log("success")
					$scope.operadoras = success.data;
				},function (error){
					$scope.error = "Não foi possível carregar os dados!"
				});

			};



			$scope.adicionarContato = function (contato) {
				console.log('Adicionar Contato >>> ', contato);
				contato.serial = serialGenerator.generate();
				contato.data = new Date();
				contatosAPI.saveContato(contato).then(function (success){
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					carregarContatos();
				},function (error){
					$scope.message = "Aconteceu um problema: " + error.data;
				});
			};

			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado) return contato;
				});
			};

			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			}

			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			}

			//CSS
			$scope.classe1 = "selecionado";
			$scope.classe2 = "negrito";

			carregarContatos();
			carregarOperadoras();

		});