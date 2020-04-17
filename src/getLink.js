const mysql = require('mysql');

/**
 * @param {String} short the minified url
 * @param {Function} callback 
 */

function getLink(short, callback) {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'kevinrulz',
        database: 'url_db'
    });
    connection.connect();

    connection.query(`SELECT link from map where short='${short}'`, function (error, results, fields) {
        if (error) throw error;
        if (results[0] == undefined) return callback(null)
        return callback(results[0].link)
    })

    connection.end();
}

module.exports = getLink