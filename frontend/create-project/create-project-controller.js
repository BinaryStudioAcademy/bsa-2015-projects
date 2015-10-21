(function() {angular.module('projectsApp')
	.controller('CreateProjectController', CreateProjectController);

	CreateProjectController.$inject = ['projects', '$state', '$stateParams'];

	function CreateProjectController(projects, $state, $stateParams) {
		vm = this;

		vm.name = "";

		vm.createProject = function() {
			projects.create({
				name: vm.name
			});

			$state.go('projects');
		};
	}
})();