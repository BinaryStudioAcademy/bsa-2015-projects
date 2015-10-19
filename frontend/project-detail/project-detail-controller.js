(function() {angular.module('projectsApp')
	.controller('ProjectDetailController', ProjectDetailController);

	ProjectDetailController.$inject = ['$scope', 'projects', '$stateParams'];

	function ProjectDetailController($scope, projects, $stateParams) {
		vm = this;
		vm.projectDetail = projects.projectDetail;
		console.log('vm', vm);

		init = function(){
			console.log("Here must be info about project #", vm.projectDetail);
		};

		init();

		$scope.$watchCollection(function(){
			return projects.projectDetail;
		},
			function(newVal, oldVal){
				console.log('newVal', newVal);
			});

	}
})();