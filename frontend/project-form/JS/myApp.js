(function(){
	'use strict';

var app = angular.module('myApp', ['ngSanitize', 'ui.select']);

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */


app.controller('DemoCtrl', function($scope, $http, $timeout) {
  $scope.disabled = undefined;
  $scope.searchEnabled = undefined;


  $scope.disable = function() {
    $scope.disabled = true;
  };

  $scope.someGroupFn = function (item){

    if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'From A - M';

    if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';

  };

 

  $scope.availableTechnology = ['someTechnology1','someTechnology2','someTechnology3','someTechnology4','someTechnology5'];
  $scope.availableUsers = ['User1','User2','User3','User4','User5'];

  $scope.multipleDemo = {};
  $scope.multipleDemo.technologies = [];
  $scope.multipleDemo.users = [];

});

	
})();

