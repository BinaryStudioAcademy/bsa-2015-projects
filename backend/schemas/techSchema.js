var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var techSchema = new Schema({
	technology_id : Schema.Types.ObjectId,
	name: String,
	screenshot: String
	
});

module.exports = mongoose.model('Technology', techSchema);