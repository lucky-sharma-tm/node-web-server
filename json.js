const file = require('fs');

var obj={
title : 'Lucky',
body: 'Texas'
};

const originalNotes=JSON.stringify(obj);
fs.writeFileSync('Notes.json',originalNotes);

var noteString=fs.readFileSync('Notes.json');
var note=JSON.parse(notestring);

console.log(typeof note);
console.log(note.title);

