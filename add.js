console.log('starting nodejs app');
const fs= require('fs');
var fetchNotes= ()=> {
    try {
        var notesString = fs.readFileSync('add-note.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};
var saveNotes= (notes)=>{
    fs.writeFileSync('add-note.json',JSON.stringify(notes));
}
var add = (title,body) => {
   var notes=fetchNotes();
    var note= {
        title,body
    };
  
var duplicateNotes = notes.filter((note) => note.title===title);
if(duplicateNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
}};
const list = () => {
console.log(fetchNotes());
}
const remove = (title) => {
    notes= fetchNotes();
    note= {
        title
    }
    var filteredNotes= notes.filter((note)=>note.title!==title);
    saveNotes(filteredNotes);
}

module.exports = {
   add,
   list,
   remove
};