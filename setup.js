const mysql = require('mysql')
const db_cred = require('./database_cred')
/**
 * 
 * 
 */
function createDB() {
    let connection = mysql.createConnection({
        multipleStatements: true,
        host: db_cred.host,
        user: db_cred.user,
        password: db_cred.password
    });
    connection.connect()
    connection.query(`CREATE DATABASE ${db_cred.database};USE ${db_cred.database};CREATE TABLE ${db_cred.table} (short varchar(6) NOT NULL, link varchar(255) NOT NULL,createdAt date NOT NULL,PRIMARY KEY (short));`,
        function (error, results, fields) {
            if (error)
                throw error
            else
                console.log('No errors. Installed Successfully');
        })
    connection.end();

}

createDB();