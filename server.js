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

//variables
const noteListItems = []

// Routes
// =============================================================
//GET
app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    return res.json(noteListItems)
    });
//POST
app.post("/api/notes", function(req, res) {
    let activeNote = req.body
    noteListItems.push(activeNote)
    res.json(noteListItems)
    console.log(noteListItems)
});

//DELETE
// app.delete("/api/notes/:id", function(req, res) {

// }); 
  
  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
  