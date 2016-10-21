//var conn = require('../configuration/connections/sed.js');
module.exports.getChar = function(req, res) {
	char.chars(req, conn, function(results) {
	    res.json(results);
	});
};