var checkToken = require('../middleware/checkToken.js');


module.exports = function(app){
    
    app.use(checkToken);
  //  var main = require('./main.js');
    var api = require('./api/routes')(app);
};