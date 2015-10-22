var checkToken = require('../middleware/checkToken.js');
var routes = require('./api/routes');

var User = require('../schemas/userSchema');
var userRepository = require('../repositories/UserRepository');
module.exports = function(app){
	app.use(checkToken);
	
	app.get('/', function(req, res){
		res.render('index');
		User.findOne({
			email: req.decoded.email
		}).select('email').exec(function(err, user){
			if (err){
				throw err;
			}
			if(!user){
				userRepository.add(req.decoded , function(err ,data){
					res.data = data;
					res.err = err;
					next();
				});
			}

		});
	});

	routes(app);
};