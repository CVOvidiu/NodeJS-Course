/*
    Challenge: Add an option to yargs

    1. Setup a body option for the add command
    2. Configure a description, make it required, and for it to be a string
    3. Log the body value in the handler function
    4. Test your work!
*/

const yargs = require('yargs');

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
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },  
    handler: function(argv) {
        console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
    }
});

yargs.parse();