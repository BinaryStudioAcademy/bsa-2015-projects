var casual = require('casual');
var context = require('./units/context');
var utils = require('./units/utils');

casual.define('technologies_id_', function(entityName, unique) {
	return utils.findId('technologies', entityName, unique);
});

casual.define('technologies_', function() {
	var id = casual.technologies_id_('technologies');
	return {
		_id: id,
		name: casual.word,
		screenshot: casual.array_of_words(n = 4) // casual.js haven't avatar or pictures
	};
});