(function() {angular.module('projectsApp')
	.controller('CreateProjectController', CreateProjectController);

	CreateProjectController.$inject = ['$stateParams'];

	function CreateProjectController($stateParams) {
		vm = this;

		vm.message = "Create new projects";
	}
})();