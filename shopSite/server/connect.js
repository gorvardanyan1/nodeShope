const mySql = require('mysql')



// let con = mySql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE shopWebSite", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });


let con = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shopwebsite"
})

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     let sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, img VARCHAR(255), name VARCHAR(255), model VARCHAR(255), price INT)";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

con.connect((err) => {
    if (err) throw err;
console.log('Conected');
})

module.exports.con = con