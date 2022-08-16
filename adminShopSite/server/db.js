const mySql = require('mysql')
const conected = require('./connect')

// let con = mySql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root'
// });

// con.connect(function (err) {
//     if (err) throw err
//     console.log("Connected");
//     con.query("CREATE DATABASE shopwebsite", function (err, result) {
//         if (err) throw err;
//         console.log("Database Created");
//     })
// })

// let con = mySql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "shopwebsite"
// })

// con.connect((err) => {
//     if (err) throw err;
//     console.log('Connected');
//     let sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY,img VARCHAR(255) ,name VARCHAR(255), model VARCHAR(255), price VARCHAR(255))"
//     con.query(sql, (err, result) => {
//         if (err) throw err
//         console.log('created');
//     })
// })



module.exports.insertInto = function insertInto(img, name, model, price) {

    let sql = "INSERT INTO products (img,name,model,price) VALUES (?, ? ,? ,?)"
    conected.con.query(sql, [img, name, model, price], (err, result) => {
        if (err) throw err;

    })

}



module.exports.selectAll = (res) => {
    conected.con.query("SELECT * FROM products", (err, result, fields) => {
        if (err) throw err;
        res.send(result)

    })
}



module.exports.selectId = (id, res) => {
    let sql = "SELECT * FROM products WHERE id = ?"
    conected.con.query(sql, [id + ''], (err, result) => {
        if (err) throw err;
        res.send(result[0])
    })
}
module.exports.delete = (id, res) => {
    let sql = "DELETE FROM products WHERE id = ?"
    conected.con.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send("Deleted")
    })
}
