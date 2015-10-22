var projectRoutes = require('./projectRoutes');
var me = require('./me');
var technologyRoutes = require('./technologyRoutes');

module.exports = function(app) {
	return {
		me: me(app),
		technologyRoutes : technologyRoutes(app),
		projectRoutes: projectRoutes(app)
	};
};