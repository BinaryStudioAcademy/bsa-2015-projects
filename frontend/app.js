var app = angular.module('projectsApp', [
	'ui.router', 
	'ui.bootstrap', 
	'ngAnimate'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
		$urlRouterProvider.otherwise('projects');

		$stateProvider
			.state('projects', {
				url: '/projects',
				templateUrl: './templates/project-list/project-list.html',
				controller: 'ProjectListController',
				controllerAs: 'vm',
				resolve: {
					projectsPromise: ['projects', function(projects){
						return projects.getAll();
					}]
				}
			})

			.state('project-view', {
				url: '/projects/:id/view',
				templateUrl: './templates/project-detail/project-detail.html',
				controller: 'ProjectDetailController',
				controllerAs: 'vm',
				resolve: {
					projectsPromise: ['projects', '$stateParams', function(projects, $stateParams){
						var id = $stateParams.id;
						console.log("Resolve details", id);
						return projects.getProject(id);
					}]
				}
			})

			.state('create-project', {
				url: '/projects/create',
				templateUrl: './templates/create-project/create-project.html',
				controller: 'CreateProjectController',
				controllerAs: 'vm'
			});
	}
]);
