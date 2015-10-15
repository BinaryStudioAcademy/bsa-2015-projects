var casual = require('casual');
var context = require('./units/context');
var utils = require('./units/utils');

casual.define('project_id_', function(entityName, unique) {
	return utils.findId('board', entityName, unique);
});

casual.define('project_', function() {
	var id = casual.project_id_('project');
	return {
		_id: id,
		name: casual.word,
		description: casual.description,
		begin: casual.date(format = 'YYYY-MM-DD'),
		end: casual.date(format = 'YYYY-MM-DD'),
		tags: casual.array_of_words(n = 4),
		stage: casual.random_element(['done', 'inProgres']),
		screenshots: casual.array_of_words(n = 4)  // casual.js haven't avatar or pictures
	};
});