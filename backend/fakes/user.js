var casual = require('casual');
var context = require('./units/context');
var utils = require('./units/utils');

casual.define('user_', function() {
	var id = casual.mongo_id;
	context.user_ids.push(id);
	var name = casual.name;
	var surname = casual.last_name;
	var avatar = casual.word; // casual.js haven't avatar or pictures
	return {
		_id: id,
		name: name,
		surname: surname,
		avatar: avatar
	};
});

casual.define('user_id_', function(entityName, unique) {
	return utils.findId('user', entityName, unique);
});