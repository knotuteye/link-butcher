const mysql = require('mysql')
const db_cred = require('./database_cred')
/**
 * 
 * @param {String} short the hash to store
 * @param {String} link the link to store
 */
function updateDB(short, link) {
    let connection = mysql.createConnection(db_cred);
    connection.connect()
    connection.query(`INSERT INTO map (short, link, createdAt) values("${short}","${link}", curdate())`,
        function (error, results, fields) {
            if (error) throw error;

        })
    connection.end();
}



module.exports = updateDB