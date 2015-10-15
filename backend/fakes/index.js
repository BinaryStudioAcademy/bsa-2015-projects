var casual = require('casual');
var async = require('async');
var mongoose = require('mongoose');
var dbConnectionHandler = require('../db/dbconnect');

var repositories = {
	user: require('../repositories/userRepository'),
	project: require('../repositories/projectRepository'),
	technologies: require('../repositories/technologiesRepository')
};

require('./units/helpers');

require('./project');
require('./user');
require('./technologies');


var generate = function(type, count, toBeCleaned, callback) { 
	if (typeof callback === 'undefined'){
		callback = toBeCleaned;
	}
	if (toBeCleaned || typeof toBeCleaned === 'undefined'){
		repositories[type].removeAll();
	}

	var entities = [];
	for (var i = 0; i < count; i++){
		entities.push(casual[type + '_']);
	}
	console.log(entities);
	repositories[type].add(entities, callback);
};

async.waterfall([
	generate.bind(null, 'user', 100),
	generate.bind(null, 'project', 15),
	generate.bind(null, 'technologies', 10)
], function(err, data){
	console.log('async', err);
	process.exit();
});