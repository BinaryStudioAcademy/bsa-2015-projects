(function() {angular.module('projectsApp')
	.controller('ProjectDetailController', ProjectDetailController);

	ProjectDetailController.$inject = ['projects', '$stateParams', 'Msg'];

	function ProjectDetailController(projects, $stateParams, Msg) {
		vm = this;
		vm.projectDetail = projects.projectDetail;
		console.log('vm', vm);

		init = function(){
			console.log("Here must be info about project #", vm.projectDetail.id);
		};

		vm.editProject = function(){
			console.info('Here must be redirect to edit');
		};

		vm.deleteProject = function(){
			var message = {
				text:'Do you realy want delete project ' + vm.projectDetail.name + ' ?',
				type: 'warning'
			};
			Msg.confirm(message, function(answer){
				if (answer){console.log('agree to delete project', vm.projectDetail.name);}
				else {console.log('cancel to delete project', vm.projectDetail.name);}
			});
		};

		init();

	}
})();