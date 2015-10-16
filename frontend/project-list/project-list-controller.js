(function() {
	angular.module('projectsApp')
	.controller('ProjectListController', ProjectListController)
	.filter('cut', function () {
			return function (value, wordwise, max, tail) {
				if (!value) return '';

				max = parseInt(max, 10);
				if (!max) return value;
				if (value.length <= max) return value;

				value = value.substr(0, max);
				if (wordwise) {
					var lastspace = value.lastIndexOf(' ');
					if (lastspace != -1) {
						value = value.substr(0, lastspace);
					}
				}

				return value + (tail || '...');
			};
		});

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




