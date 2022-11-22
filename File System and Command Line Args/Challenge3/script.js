/*
    Challenge: Work with JSON and the file system

    1. Load and parse the JSON data
    2. Change the name and age property using your info
    3. Stringify the changed object and overwrite the original data
    4. Test your work by viewing data in the JSON file
*/

const fs = require('fs');

const jsonBuffer = fs.readFileSync('content.json');
const jsonData = jsonBuffer.toString();
const objData = JSON.parse(jsonData);

objData.name = 'Ovidiu';
objData.age = '20';

const jsonNew = JSON.stringify(objData);
fs.writeFileSync('content.json', jsonNew);