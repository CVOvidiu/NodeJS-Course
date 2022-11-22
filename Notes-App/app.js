const yargs = require('yargs');

const notesUtil = require('./notes.js');

yargs.version('1.0.0');

/*
    Goal: Wire up list command
    1. Create and export listNotes from notes.js
        - "Your notes" using chalk
        - Print note title for each note
    2. Call listNotes from command handler
    3. Test your work! 
*/

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notesUtil.listNotes();
    }
});

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesUtil.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesUtil.removeNote(argv.title);
    }
});

yargs.parse();