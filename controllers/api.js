const express = require("express");
const router = express.Router();
const DB = require("../db/DB");

router.get("/api/notes", async(req, res) => {
    res.json(await DB.readNotes());
});

router.post("/api/notes", async(req, res) =>{
    let activeNote = req.body
    let currentId=1
    const savedNotes =  await DB.readNotes();
    if(savedNotes.length > 0){
      if(savedNotes[0].id){
          currentId = savedNotes[0].id +1
          activeNote.id= currentId
      }else{
          activeNote.id=currentId
      }
    }else{
        activeNote.id=currentId
    }
    await DB.writeNotes([activeNote, ...savedNotes]);
    res.json(activeNote)
});

router.delete("/api/notes/:id", async (req, res) =>{
    const uniqueID = parseInt(req.params.id);
    console.log(uniqueID);
    res.json( await DB.deleteNote(uniqueID));
}); 

module.exports = router;