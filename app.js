console.log('starting app');
 const fs=require('fs');
//const _=require('lodash');
const yargs=require('yargs');
const argv=yargs.argv;

const Notes=require('./Notes.js');

var command=process.argv[2];
console.log('Command:',command);

if (command === 'add') {

	var note=Notes.addNote(argv.title,argv.body);
		console.log(note);
		if (note) {
			console.log('Note Created');
			console.log('--');
			Notes.nodeLog(note);
		//	console.log(`Title : ${note.body}`);
		}
		else {
			console.log('Note name taken');
		};
	}
  else if(command === 'list') {
		Notes.getAll();
	}
  else if(command === 'remove') {
		var removeNote=Notes.removingNote(argv.title);
		console.log(`Note removed: ${removeNote}`);
	}
  else if(command === 'read') {
    var note=Notes.readNote(argv.title);
    console.log(note);
		Notes.nodeLog(note);
	}
  else {
		console.log('Command not found');
	}
