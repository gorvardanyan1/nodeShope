const mySql = require('mysql')
let con = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shopwebsite"
})

con.connect((err) => {
    if (err) throw err;

})

module.exports.con = con