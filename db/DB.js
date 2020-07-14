const util = require("util")
const fs = require("fs")
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const dbData = "db/db.json"



class DB{
    async readNotes(){
        try {
            const notesRaw = await readFileAsync(dbData,"utf8")
            console.log(notesRaw)
            return notesRaw ? JSON.parse(notesRaw) : []
        } catch (e) {
            console.log("Something went wrong while READING notes ", e)
        }
     
    }
    async writeNotes(noteListItems){
        try {
          await writeFileAsync(dbData, JSON.stringify(noteListItems))
        } catch (e) {
            console.log("Something went wrong while WRITING notes ", e)
        }
    }
    async deleteNote(idNum){
        const notesArray = await readFileAsync(dbData, "utf8")
        try{
            // notesArray.filter(note => notesArray.id===idNum)
            // console.log(note)
            for (var i=0; i < notesArray.length; i++) {
                if (notesArray[i].id === idNum) {
                    notesArray.splice(i,0)
                    console.log("this is the notes array", notesArray)
                    writeFileAsync(dbData, notesArray)
                }
            }
            // writeFileAsync(dbData, notesArray)

        } catch (e){
            console.log("something went wrong while DELETING notes", e)
        }
    }

}

module.exports = new DB();