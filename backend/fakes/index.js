var casual = require('casual');
var async = require('async');
var mongoose = require('mongoose');
var dbConnectionHandler = require('../db/dbconnect');

var repositories = {
	user: require('../repositories/userRepository'),
	project: require('../repositories/projectRepository'),
	technology: require('../repositories/technologyRepository')
};

require('./units/helpers');

require('./project');
require('./user');
require('./technology');


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
	generate.bind(null, 'user', 10),
	generate.bind(null, 'technology', 5),
	generate.bind(null, 'project', 20),
	
], function(err, data){
	console.log('async', err);
	process.exit();
});