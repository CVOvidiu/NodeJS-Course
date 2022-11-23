const request = require('request');
const positionstack = require(`./utils/positionstack.js`);

positionstack('Bucharest', (error, data) => { // Pass the address to position stack and get error/data and do something
    console.log(`Error: ${error}`);
    console.log(`Data: `, data);
});