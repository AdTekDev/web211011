const http = require("http");
var fs = require("fs");

/// Khai bao su dung Library 
// *** chu y, cai dat Library:  npm install --save express
const express = require('express');
const app = express();
const router = express.Router();

/// Khai bao cac Config, Params
const hostname = "localhost";
const port = process.env.PORT || 3000;

/// Khai bao Variables
var solan = 0;

/// Khai Bao CODE Xu Ly cho URL dua vao Express - Router

router.get( "/home", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

        res.writeHead(200);
        var data = fs.readFileSync("./view/home.html");
        res.end(data.toString());
});

router.get( "/order", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

                res.writeHead(200);
                res.end("<h1> Order page ! </h1>");

});


router.get( "/products", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

                res.writeHead(200);
                var data = fs.readFileSync("./view/products.html");
                res.end(data.toString());

});


router.get( "/about", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

                res.writeHead(200);
                res.end("<h1> About page ! </h1>");

});


router.get( "/login", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

                res.writeHead(200);
                res.end("<h1> Login page ! </h1>");

});


router.get( "/signin", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

                res.writeHead(200);
                res.end("<h1> Signin page ! </h1>");

});


router.get( "/logout", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

                res.writeHead(200);
                res.end("<h1> logout page ! </h1>");

});


router.get( "/contact", 
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- request !!!", solan++ , req.url);

                res.writeHead(200);
                res.end("<h1> Contact page ! </h1>");

});



/// gan root URL vao Router
app.use("/", router);

/// Open Server - Listen PORT
app.listen( port, () => {
    console.log("Start SERVER - LISTEN ", port);
});


