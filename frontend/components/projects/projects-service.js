angular.module('projectsApp')
.factory('projects', ['$http', function ($http) {
    var service = {
        projects: []
    };

    service.getAll = function() {
        return $http.get('/api/projects').success(function(data) {
            angular.copy(data, service.projects);
            console.table(data);
        });
    };

    return service;
}]);