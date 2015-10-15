(function() {
	angular.module('projectsApp')
	.controller('ProjectDetailController', ProjectDetailController);

	ProjectDetailController.$inject = ['project'];

	function ProjectDetailController(project) {
		vm = this;
		vm.projectDetail = projects.projectDetail;


	}
})();