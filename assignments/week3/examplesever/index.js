const express = require("express");
//const { Http2ServerRequest } = require("http2");

// "Run " the Express package.
const app = express();

// Allows our Express server to understand HTTP requests.
const http = require("http").Server(app);

const port = 3000; // Most common "DEVELOPMENT" port is 8080.

// Provide the port number to listen to for Express
http.listen(port);
console.log("Running Express Server on " + port + ". Use CTRL+ C to stop server.");

// Set up Express Routes
// Root Rout, when someone types "http://localhost:3000/"
app.use("/", express.static("public_html/"));
app.use('/secretwebsite', express.static("public_html/secretwebsite"));

// POST Routes

app.post("/submitNumber", function (request, response) {
    response.send("Thank you for your request.");
});