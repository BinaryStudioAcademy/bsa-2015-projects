angular.module('projectsApp')
.factory('projects', ['$http', function ($http) {
    var service = {
        projects: []
        projectDetail: {}
    };

    service.getAll = function() {
        return $http.get('/api/projects').success(function(data) {
            angular.copy(data, service.projects);
            console.table(data);
        });
    };

    service.getProject = function(id) {
        return $http.get('/api/projects/' + id).success(function(data) {
            angular.copy(data, service.projectDetail);
            console.table(data);
        });
    };


    return service;
}]);