/*
    Challenge: Add two new commands
    
    1. Setup command to support 'list' command (print placeholder message for now)
    2. Setup command to support 'read' command (placeholder)
    3. Test your work by running both commands and ensure correct output
*/

const yargs = require('yargs');

yargs.command({
    command: 'list',
    description: 'List the notes',
    handler: function() {
        console.log('Listing notes...');
    }
});

yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function() {
        console.log('Reading note...');
    }
});

console.log(yargs.argv);