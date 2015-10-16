(function() {
	angular.module('projectsApp')
	.controller('ProjectDetailController', ProjectDetailController);

	ProjectDetailController.$inject = ['project', '$stateParams'];

	function ProjectDetailController(project) {
		vm = this;
		vm.projectDetail = projects.projectDetail;

		init = function(){
			console.log("Here must be info about project #", $stateParams.id);
		};

		init();

	}
})();