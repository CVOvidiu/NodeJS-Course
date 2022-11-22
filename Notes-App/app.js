const yargs = require('yargs');

const notesUtil = require('./notes.js');

yargs.version('1.0.0');

/*
    Goal: Wire up read command
    1. Setup --title option for read command
    2. Create readNote in notes.js
        - Search for note by title
        - Find note and print title (styled) and body (plain)
        - No note found? Print error in red.
    3. Have the command handler call the function
    4. Test your work by running a couple commands
*/

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.readNote(argv.title);
    }
});

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