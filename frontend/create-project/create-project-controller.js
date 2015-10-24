(function() {angular.module('projectsApp')
	.controller('CreateProjectController', CreateProjectController);

	CreateProjectController.$inject = ['projects', '$state', '$stateParams'];

	function CreateProjectController(projects, $state, $stateParams) {
		vm = this;

		vm.name = "";
		vm.description="";
		vm.begin="";
		vm.end="";
		vm.tags=[];

		vm.createProject = function() {
			projects.create({
				name: vm.name,
				description: vm.description,
				begin: vm.begin,
				end: vm.end,
				tags: vm.tags.split(',')
			});

			$state.go('projects');
		};
	}
})();