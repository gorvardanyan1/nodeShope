const express = require('express')
const database = require('./db')

const app = express();
app.use(express.static("public"))
app.get("/", (req, res) => {
    res.redirect("index.html")
})
app.get("/selectAll", (req, res) => {
    database.selectAll(res)
})
app.get("/selectIphone", (req, res) => {
    database.selectName('iphone', res);
})
app.get("/selectAsus", (req, res) => {
    database.selectName('asus', res);
})
app.get("/selectHp",(req,res)=> {
    database.selectName('hp',res);
})
app.listen(3001);