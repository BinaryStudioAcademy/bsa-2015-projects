var app = angular.module('projectsApp', [
	'ui.router', 
	'ui.bootstrap', 
	'ngAnimate',
]);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider, $resourceProvider, $httpProvider, $locationProvider) {
		$urlRouterProvider.otherwise('home');
		
		$stateProvider
		.state('home',{
			url: '',
			templateUrl: './templates/project-list/project-list.html',
			controller: 'ProjectListController',
			controllerAs: 'vm',
			resolve: {
				projectsPromise: ['projects', function(projects){
					return projects.getAll();
				}]
			}
		});
	}
]);
