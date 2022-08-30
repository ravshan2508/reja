console.log('Web Serverni boshlash');
const express = require('express');
const app = express();
const http = require('http');
//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//2 Session kodlar

//3 Views kodlar
app.set("views","views");
app.set("view engine","ejs");

//4 Routing code

app.get("/",function(req, res) {
    res.end(`<h1 style="background: violet">Hello World by Ravshan</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`This server is runnig sucsessfully on port: ${PORT}`);
});


