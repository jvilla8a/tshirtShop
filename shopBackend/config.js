const mysql = require('mysql')

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'nick',
    password: '1q2w3e4r',
    database: 'tshirtshop'    
});