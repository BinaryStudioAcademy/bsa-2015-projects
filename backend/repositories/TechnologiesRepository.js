var connection = require('../db/dbconnect');
var Technologies = require('./generalTechnologies');
var Technologies = require('../schemas/technologiesSchema');

function TechnologiesRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Technologies;
}

TechnologiesRepository.prototype = new Repository();

module.exports = new TechnologiesRepository();