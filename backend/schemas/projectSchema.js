var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	_id : Schema.Types.ObjectId,
	name: String,
	description : String,
	begin : { type: Date, default: Date.now },
	end : Date,
	users : [ {type : mongoose.Schema.ObjectId, ref : 'User'} ],
	tags : [],
	technologies : [ {type : mongoose.Schema.ObjectId, ref : 'Technology'} ],
	stage : String,
	screenshots : []
});

module.exports = mongoose.model('Project', projectSchema);