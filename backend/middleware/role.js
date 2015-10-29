module.exports = function(role) {
    return function(req, res, next) {
        if (role !== req.decoded.role) console.log('fail');
        else next();
    };
};