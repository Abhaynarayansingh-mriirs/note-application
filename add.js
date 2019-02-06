console.log('starting nodejs app');
const fs= require('fs');
var add = (title,body) => {
   var notes=[];
    var note= {
        title,body
    };
  try {
        var notesString = fs.readFileSync('add-note.json');
        notes= JSON.parse(notesString);
    } catch (error) {
        
    }
var duplicateNotes = notes.filter((note) => note.title===title);
if(duplicateNotes.length===0){
    notes.push(note);
   fs.writeFileSync('add-note.json',JSON.stringify(notes));
}};
const list = () => {

   
}
const remove = (title) => {
    console.log('removing notes with ',title);
}

module.exports = {
   add,
   list,
   remove
};