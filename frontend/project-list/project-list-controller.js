(function() {
	angular.module('projectsApp')
	.controller('ProjectListController', ProjectListController);

	ProjectListController.$inject = ['projects', 'Msg', '$state'];

	function ProjectListController(projects, Msg, $state) {
		vm = this;
		vm.projects = projects.projects;
		
		vm.goToDetail = function(id){
			Msg.alert('aaaaaBBBaaaaaaaa!!!!');

			$state.go('project-view', {id: id});
		};


		// Msg.alert('aaaaaaaaaaaaaa!!!!');

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




