const Pool = require('pg').Pool
const pool = new Pool({
	user: "postgres",
	password: "Masterkey",
	host: "localhost",
	port: 5432,
	database: "pg_online_3R"
})

module.exports=pool