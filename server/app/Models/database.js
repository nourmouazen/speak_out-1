const mysql = require('mysql');
const dbconfig = require("../db-config/db.config")

const connection = mysql.createPool({
  host:     dbconfig.HOST,
  user:     dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DB,
  multipleStatements :true
});

connection.query('select 1 + 1', (err, rows) => { 
  if (err) throw err;  
    console.log("Connected! , hello");
});

module.exports = connection;