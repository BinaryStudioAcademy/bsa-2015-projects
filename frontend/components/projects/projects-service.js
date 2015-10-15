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

    service.getProject = function(id, refresh) {
        // if (!refresh && service.projectDetail[id]) {
        //     return service.projectDetail[id]
        // }
        return $http.get('/api/projects/' + id).success(function(data) {
            angular.copy(data, service.projectDetail[id]);
            console.table(data);
        });
    };


    return service;
}]);