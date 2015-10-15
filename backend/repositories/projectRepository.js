var connection = require('../db/dbconnect');
var Repository = require('./generalRepository');
var Project = require('../schemas/projectSchema');
var User  = require('../schemas/userSchema');
var Technology  = require('../schemas/techSchema');

function ProjectRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Project;
}

ProjectRepository.prototype = new Repository();

module.exports = new ProjectRepository();