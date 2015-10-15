var Repository = function(){

};

Repository.prototype.add = function(data, callback){
	this.model.create(data, function(err, data){
		callback(err, data);
	});
};

Repository.prototype.update = function(id, body, callback){
	var query = this.model.update({_id:id}, body);
	query.exec(callback);
};

Repository.prototype.delete = function(id, callback){
	var model = this.model;
	var query = model.remove({_id:id});
	query.exec(callback);
};

Repository.prototype.getAll = function(callback){
	var model = this.model;
	var query = model.find();
	query.exec(callback);
};

Repository.prototype.getById = function(id, callback){
	var model = this.model;
	var query = model.findOne({_id:id});
	query.exec(callback);
};

Repository.prototype.removeAll = function(callback) {
	var query = this.model.remove();
	query.exec(callback);
};

module.exports = Repository;