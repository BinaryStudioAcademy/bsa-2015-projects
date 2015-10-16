var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	_id : Schema.Types.ObjectId,
	name: String,
	surname : String

});

module.exports = mongoose.model('User', userSchema);