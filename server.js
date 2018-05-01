// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');

app.use(express.static(path.join(__dirname, './shintoCoinsApp/dist')));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./shintoCoinsApp/dist/index.html"))
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})