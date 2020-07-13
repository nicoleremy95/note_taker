const express = require("express");
const router = express.Router();
const DB = require("../db/DB");
const noteListItems = [];

router.get("/api/notes", function(req, res) {
    res.json(DB.readNotes());
});

router.post("/api/notes", async(req, res) =>{
    let activeNote = req.body
    const savedNotes = await DB.readNotes();
    await DB.writeNotes(activeNote, savedNotes);
    res.json(noteListItems.push(activeNote))
    
    // noteListItems.push(activeNote)
    // res.json(noteListItems)
    // console.log(noteListItems)

    // let noteListItemsStr = JSON.stringify(noteListItems)

    // fs.writeFile(postAPIPath,noteListItemsStr,function(err){
    //     if (err){
    //         return console.log(err);
    //     } console.log("note item posted to db.json")
    // })
});

// router.delete("/api/notes/:id", async (req, res) =>{
//     const uniqueID = parseInt(req.params.id);
//     await DB.deleteNote(uniqueID);
//     res.json(noteListItems)

// }); 

module.exports = router;