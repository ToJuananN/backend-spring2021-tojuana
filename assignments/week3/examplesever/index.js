const express = require("express");
//const bodyParser = require("body-parser"); DEPRECATED

// "Run " the Express package.
const app = express();

// Allows our Express server to understand HTTP requests.
const http = require("http").Server(app);

// Use body-parser to convert our POST data to proper JS datatypes. CALL METHODS FROM EXPRESS PACKAGE INSTEAD
app.use(express.json());
app.use(express.urlencoded(
    {extended: false}
));

const port = 3000; // Most common "DEVELOPMENT" port is 8080.

// Provide the port number to listen to for Express
http.listen(port);
console.log("Running Express Server on " + port + ". Use CTRL+ C to stop server.");

// Set up Express Routes
// Root Rout, when someone types "http://localhost:3000/"
app.use("/", express.static("public_html/"));
app.use("/secretwebsite", express.static("public_html/secretwebsite"));

// POST Routes

app.post("/submitNumber", function (request, response) {

    let dataFromFrontend = request.body;
   
    console.log("Our visitor says:" + dataFromFrontend.message);

    response.send("Thank you for your request.");
});