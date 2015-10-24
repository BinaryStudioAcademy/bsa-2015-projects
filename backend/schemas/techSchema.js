var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var techSchema = new Schema({
	name: String,
	screenshot: String

},{collection : 'technologies'});

module.exports = mongoose.model('Technology', techSchema);