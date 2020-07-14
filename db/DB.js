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
        const newArray = JSON.parse(notesArray) 
        try{
            for (var i=0; i < newArray.length; i++) {
                console.log("notes array index id", newArray[i])
                
                let obj = newArray[i].id
                console.log("idNum", idNum)
                console.log("this is the current notes array", newArray)
                if (obj === idNum) {
                    newArray.splice(i,1);
                    console.log("this is the notes array after delete", newArray)
                    let newArrayStr = JSON.stringify(newArray)
                    writeFileAsync(dbData, newArrayStr)
                }
            }
        } catch (e){
            console.log("something went wrong while DELETING notes", e)
        }
    }
}

module.exports = new DB();