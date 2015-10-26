var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	name: String,
	description : String,
	begin : { type: Date, default: Date.now },
	end : Date,
	users : [ {type : mongoose.Schema.ObjectId, ref : 'User'} ],
	tags : [{type : mongoose.Schema.ObjectId, ref : 'Tag'}],
	technologies : [ {type : mongoose.Schema.ObjectId, ref : 'Technology'} ],
	stage : String,
	screenshots : [String]
});

module.exports = mongoose.model('Project', projectSchema);