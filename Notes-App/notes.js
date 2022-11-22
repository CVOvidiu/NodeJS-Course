const chalk = require('chalk');

const fs = require('fs');

const readNote = (title) => {
    const notes = loadNotes();
    const found = notes.find(note => note.title === title);

    if(found)
        console.log(chalk.magenta.inverse(`${title}:\n`) + ` ${found.body}`);
    else
        console.log(chalk.bgRed("Error: Note doesn't exist."));
};

const listNotes = () => {
    const notes = loadNotes();
    const titles = [];
    notes.forEach(note => titles.push(note.title));
    console.log(chalk.bgMagenta(`Notes:`) + ' ' + titles.join(', '));
};

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if(!duplicateNote) {
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
    readNote: readNote,
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote
};