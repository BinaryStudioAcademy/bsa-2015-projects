var casual = require('casual');
var context = require('./units/context');
var utils = require('./units/utils');

casual.define('technology_id_', function(entityName, unique) {
	return utils.findId('technology', entityName, unique);
});

casual.define('technology_', function() {
	var id = casual.mongo_id;
	context.technology_ids.push(id);
	return {
		technology_id: id,
		name: casual.word,
		screenshot: casual.array_of_words(n = 4) // casual.js haven't avatar or pictures
	};
});