var apiResponse = require('express-api-response');
var projectRepository = require('../../repositories/projectRepository');

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

	app.post('/api/projects', function(req, res, next) {
		projectRepository.add(req.body, function(err, data) {
			console.log(err);
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);
};