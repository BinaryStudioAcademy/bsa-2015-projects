var apiResponse = require('express-api-response');
var tech = require('../../repositories/TechnologyRepository');

module.exports = function(app) {
    app.get('/api/technologies/', function(req, res, next) {
        tech.getAll(function(err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.post('/api/technologies/', function(req, res, next) {
        tech.add(req.body, function(err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);
};