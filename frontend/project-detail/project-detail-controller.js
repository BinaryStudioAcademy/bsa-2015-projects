(function() {angular.module('projectsApp')
	.controller('ProjectDetailController', ProjectDetailController);

	ProjectDetailController.$inject = ['projects', '$stateParams'];

	function ProjectDetailController(projects, $stateParams) {
		vm = this;
		vm.projectDetail = projects.projectDetail;
		console.log('vm', vm);

		init = function(){
			console.log("Here must be info about project #", vm.projectDetail.id);
		};

		init();

	}
})();