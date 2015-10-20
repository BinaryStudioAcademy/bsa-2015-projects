var jsonwebtoken = require('jsonwebtoken');
var config = require('../config/config.js');
var Cookies = require('cookies');

module.exports = function(req, res, next){
	var cookies = new Cookies(req, res);
	var token = req.body.token || req.param('token') || req.headers['x-access-token'] || cookies.get('x-access-token');
	if (token) {
		jsonwebtoken.verify(token, config.secretKey, function(err, decoded) {
			if (err) {
				res.status(403).send({ success: false, message: "Failed to authenticate user"});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		var current_url = req.protocol + '://' + req.get('host');

		cookies.set('referer', current_url);

		res.redirect(config.auth_host);
	}
};