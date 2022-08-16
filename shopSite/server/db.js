const mySql = require('mysql')
const conected = require('./connect')


module.exports.selectAll = (res) => {
    conected.con.query("SELECT * FROM products", (err, result, fields) => {
        if (err) throw err;
        res.send(result)

    })
}

module.exports.selectName = (name,res)=>{
    conected.con.query("SELECT * FROM products WHERE name = ?",[name],(err,result,fields)=>{
        if(err) throw err;
        res.send(result)
    })
}
