const mysql = require('mysql');
const db_cred = require('./database_cred')
/**
 * @param {String} short the minified url
 * @param {Function} callback 
 */

function getLink(short, callback) {
    let connection = mysql.createConnection(db_cred);
    connection.connect();

    connection.query(`SELECT link from ${db_cred.table} where short='${short}'`, function (error, results, fields) {
        if (error) throw error;
        if (results[0] == undefined) return callback(null)
        return callback(results[0].link)
    })

    connection.end();
}

module.exports = getLink