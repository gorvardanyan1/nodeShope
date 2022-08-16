let express = require('express')
let database = require('./db')
let path = require('path');


const app = express();
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.get("/", (req, res) => {
    res.sendFile("/server/index.html")
});


app.get("/selectAll", (req, res) => {
    database.selectAll(res)
});


app.post("/createProduct", (req, res) => {
    database.insertInto(req.body.img, req.body.name, req.body.model, req.body.price)
    res.redirect('index.html')
});
app.delete("/events/:id", (req, res) => {
    database.delete(req.params.id, res)
});


app.listen(3002);