const mysql = require("mysql");
const conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "root",
	database: "brand"
})
conn.connect();
module.exports = conn;
