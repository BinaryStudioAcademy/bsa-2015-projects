var technologyRepository = require('../../repositories/TechnologyRepository');
var apiResponse = require('express-api-response');

module.exports = function(app){

    app.get('/api/technologies/', function(req,res,next){
        technologyRepository.getAll(function(err,data){
            res.data = data;
            res.err = err;
            next();
        });
    },apiResponse);

    app.post('api/technologies/',function(req,res,next){
        technologyRepository.add(req.body , function(err,data){
            res.data = data;
            res.err = err;
            next();
        });
    },apiResponse);
};