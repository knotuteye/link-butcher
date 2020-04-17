const mysql = require('mysql');
const hasher = require('sha-1')
const db_cred = require('./database_cred')
const writetoDB = require('./updateDB')
/**
 * 
 * @param {String} link the link to be minified
 * @param {Function} callback 
 */
function getShort(link, callback) {
    let short = ''
    let connection = mysql.createConnection(db_cred);
    connection.connect();
    connection.query(`SELECT short from map where link='${link}'`, function (error, results, fields) {
        if (error) throw error;
        if (results[0] == undefined) {
            connection.end();
            short = hasher(link).slice(1, 6)
            writetoDB(short, link);
            return callback(short)
        } else {
            connection.end();
            return callback(results[0].short)
        }
    })

}



module.exports = getShort