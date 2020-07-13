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
    // async deleteNotes(){
    //     try{
            
    //     }
    // }

}

module.exports = new DB();