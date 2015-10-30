var connection = require('../db/dbconnect');
var Repository = require('./generalRepository');
var User = require('../schemas/userSchema');

function UserRepository() {
	Repository.prototype.constructor.call(this);
	this.model = User;
}

UserRepository.prototype = new Repository();


UserRepository.prototype.getByEmail = function(email, callback){
	var query = this.model.findOne({email: email});
	query.exec(callback);
};

UserRepository.prototype.updateCurrent = function(email, body, callback){
	var query = this.model.update({email:email}, body);
	query.exec(callback);
};

module.exports = new UserRepository();