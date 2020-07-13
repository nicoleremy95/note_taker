// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static( 'public'));

// Routes
// =============================================================
//html
const hmtlRoutes = require("./controllers/htmlroutes.js")
app.use(hmtlRoutes)
//api
const apiRoutes = require("./controllers/htmlroutes.js");
app.use(apiRoutes)

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
  