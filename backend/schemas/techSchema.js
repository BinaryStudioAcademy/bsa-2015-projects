var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var techSchema = new Schema({
	name: String,
	screenshot: String
	
});

module.exports = mongoose.model('Technologie', techSchema);