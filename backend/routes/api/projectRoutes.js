var apiResponse = require('express-api-response');
var projectRepository = require('../../repositories/projectRepository');
var isAdmin = require('../../middleware/role.js');
module.exports = function(app) {
	app.get('/api/projects/', function(req, res, next) {
		projectRepository.getAll(function(err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.get('/api/projects/:id', function(req, res, next) {
		projectRepository.getById(req.params.id, function(err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.post('/api/projects', isAdmin('admin'), function(req, res, next) {
		var name = req.body.name;
		var description = req.body.description;
		if (name.length!==0 && description.length!== 0) {
			projectRepository.add(req.body, function(err, data) {
				console.log(err);
				res.data = data;
				res.err = err;
				next();
			});
		} else {
			console.log ("Most likely you do not fill in all fields");
		}
	}, apiResponse);
};