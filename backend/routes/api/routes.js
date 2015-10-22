var projectRoutes = require('./projectRoutes');
var me = require('./me');
var technologiesRoutes = require('./technologiesRoutes');

module.exports = function(app) {
	return {
		me:me(app),
		technologiesRoutes:technologiesRoutes(app),
		projectRoutes: projectRoutes(app)
	};
};