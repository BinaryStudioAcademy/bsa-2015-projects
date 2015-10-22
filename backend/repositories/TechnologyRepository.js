var connection = require('../db/dbconnect');
var Repository = require('./generalRepository');
var Technology = require('../schemas/techSchema');

function TechnologyRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Technology;
}

TechnologyRepository.prototype = new Repository();

module.exports = new TechnologyRepository();