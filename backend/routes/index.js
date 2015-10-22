var checkToken = require('../middleware/checkToken.js');
var routes = require('./api/routes');

module.exports = function(app){
	app.use(checkToken);
	
	app.get('/', function(req, res){
		res.render('index');
	});

	routes(app);
};