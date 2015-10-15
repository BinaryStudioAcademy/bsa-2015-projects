var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	user_id : Schema.Types.ObjectId,
	name: String,
	surname : String,
	avatar : String
});

module.exports = mongoose.model('User', userSchema);