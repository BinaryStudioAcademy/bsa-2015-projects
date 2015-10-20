var projectRoutes = require('./projectRoutes');
var me = require('./me');

module.exports = function(app) {
	return {
		me:me(app),
		projectRoutes: projectRoutes(app)
	};
};