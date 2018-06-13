console.log('Starting Notes application');

const fs=require('fs');

var fetchAll =()=>
{
	try
	{
	var noteString = fs.readFileSync('notes-data.json');
	return JSON.parse(noteString);
	}
	catch (e)
	{
		return[];
	}

};

var saveNote=(notes)=>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote=(title,body)=>{

var notes=fetchAll();
var note={
title,
body
};




var duplicateNote=notes.filter((note) => note.title === title);
if (duplicateNote.length === 0) {
	notes.push(note);
	saveNote(notes);
        return note;
}

};

var getAll=()=>{
	console.log('Listing Notes');
};

  var readNote=(title)=>{
	var readNotes=fetchAll();
	var readNoteSaved=readNotes.filter((note)=>note.title === title);
	console.log(readNoteSaved);
	//var readMatchedNote=saveNote(readNoteSaved);
	return readNoteSaved[0];
};

var removingNote=(title)=>{
	var removeNote=fetchAll();
	var nodetobesaved=removeNote.filter((note)=>note.title != title);
	saveNote(nodetobesaved);
};

var nodeLog=(note)=>{
	debugger;
	console.log('---');
	console.log(`Notes read : ${note.title}`);
	};
module.exports={
	addNote,
	getAll,
	readNote,
	removingNote,
	nodeLog
};
