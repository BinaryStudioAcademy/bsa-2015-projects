var connection = require('../db/dbconnect');
var Repository = require('./generalRepository');
var Technologie = require('../schemas/techSchema');

function TechnologyRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Technologie;
}

TechnologyRepository.prototype = new Repository();

module.exports = new TechnologyRepository();