var projectRoutes = require('./projectRoutes');
var me = require('./me');
var technologiesRoutes = require('./technologiesRoutes');
var tagRoutes = require('./tagRoutes');

module.exports = function(app) {
	return {
		tagRoutes:tagRoutes(app),
		me:me(app),
		technologiesRoutes:technologiesRoutes(app),
		projectRoutes: projectRoutes(app)
	};
};