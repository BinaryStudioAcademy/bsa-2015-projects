var userRepository = require('../../repositories/userRepository');
var apiResponse = require('express-api-response');
module.exports = function(app){

     app.get('/api/me', function(req, res, next) {
        userRepository.getByEmail(req.decoded.email , function(err,data){
        	res.data = data;
        	res.err = err;
        	next();
        });
    }, apiResponse);

     app.put('/api/me',function(req,res,next){
     	userRepository.updateCurrent(req.decoded.email , body , function(err,data){
     		res.data = data;
     		res.err = err;
     		next();
     	}, apiResponse);
     });
};