const chalk = require('chalk');

const fs = require('fs');

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        
        console.log(chalk.bgGreen(`Success! Note created.`))
    } else {
        console.log(chalk.bgRed('Error! Note title taken!'));
    }
};

const removeNote = function(title) {
    const notes = loadNotes();
    const result = notes.filter(note => note.title !== title);

    if(result.length === notes.length) console.log(chalk.bgRed(`Error! Note with title '${title}' doesn't exist.`));
    else {
        saveNotes(result);
        console.log(chalk.bgGreen(`Success! Note with title '${title}' removed.`));
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
    
        return JSON.parse(dataJSON); 
    } catch(e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote
};