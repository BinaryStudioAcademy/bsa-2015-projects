var app = angular.module('projectsApp', [
	'ui.router', 
	'ui.bootstrap', 
	'ngAnimate',
]);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider, $resourceProvider, $httpProvider, $locationProvider) {
		$urlRouterProvider.otherwise('home');
		
		$stateProvider
			.state('home', {
				url: '',
				templateUrl: './templates/project-list/project-list.html',
				controller: 'ProjectListController',
				controllerAs: 'vm',
				resolve: {
					projectsPromise: ['projects', function(projects){
						return projects.getAll();
					}]
				}
			})

			.state('project', {
				url: '/project/:id',
				templateUrl: './templates/project/project-detail.html',
				controller: 'ProjectDetailController',
				controllerAs: 'vm',
				resolve: {
					projectsPromise: ['projects', '$stateParams', function(projects, $stateParams){
						var id = $stateParams.id;
						return projects.getProject(id);
					}]
				}
			});
	}
]);
