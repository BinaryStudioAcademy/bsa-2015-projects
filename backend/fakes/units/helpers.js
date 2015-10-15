var casual = require('casual');
var mongoose = require('mongoose');

casual.define('mongo_id', function(){
	return mongoose.Types.ObjectId();
});
