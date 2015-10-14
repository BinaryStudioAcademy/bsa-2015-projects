(function() {
	angular.module('projectsApp')
	.controller('ProjectListController', ProjectListController);

	ProjectListController.$inject = ['projects'];

	function ProjectListController(projects) {
		vm = this;
		vm.projects = projects.projects;

		// activate();
		
		// function activate() {
		// 	return getProjects();
		// }

		// function getProjects(){
		// 	return projects.getAll().then(function(data) {
		// 		vm.projects = data;
		// 		return vm.projects;
		// 	});
		// }
	}
})();




