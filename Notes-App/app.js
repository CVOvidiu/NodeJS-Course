const yargs = require('yargs');

const notesUtil = require('./notes.js');

yargs.version('1.0.0');

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

yargs.parse();