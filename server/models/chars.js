/**
 * Each "module.exports.[NAME]" is available as a function to the controller that calls it. 
 * any rerquired attributes must be declared prior to connection, callback
 * ------------------------------*/

// Single publication
module.exports.chars = function(pub_id, conn, callback) {
	//var sql    = 'SELECT * FROM chars ';
	conn.query(sql, function(err, result) {
	 	 callback(result);
	});
}