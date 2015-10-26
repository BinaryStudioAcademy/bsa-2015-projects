var tagRepository = require('../../repositories/tagRepository');
var apiResponse = require('express-api-response');

module.exports = function(app){
    app.get('/api/tags',function(req, res, next){
        tagRepository.getAll(function(err,data){
            res.data = data;
            res.err = err;
            next();
        });
    },apiResponse);

    app.post('/api/tags',function(req,res,next){
        tagRepository.add(req.body , function(err,data){
            res.data = data;
            res.err=err;
            next();
        });
    },apiResponse);
};