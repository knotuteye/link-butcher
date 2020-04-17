const mysql = require('mysql')
const db_cred = require('./database_cred')
/**
 * 
 * 
 */
function createDB() {
    let connection = mysql.createConnection(db_cred);
    connection.connect()
    connection.query(`INSERT INTO map (short, link, createdAt) values("${short}","${link}", curdate())`,
        function (error, results, fields) {
            if (error) throw error;

        })
    connection.end();
}