(function() {
	angular.module('projectsApp')
	.controller('ProjectListController', ProjectListController);

	ProjectListController.$inject = ['projects', '$state'];

	function ProjectListController(projects, $state) {
		vm = this;
		vm.projects = projects.projects;
		
		vm.goToDetail = function(id){
			 $state.go('project-view', {id: id});
		};

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




