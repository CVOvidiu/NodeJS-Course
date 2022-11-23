/*
    Goal: Handle all the errors
    1. Setup an error handler for low-level errors
    2. Setup error handling for no matching results
*/

const request = require('request');

const url = "http://api.positionstack.com/v1/forward?access_key=&query=Bucharest"

request({url: url, json: true}, (err, res) => {
    if(err)
        console.log(`Unable to connect to PositionStackAPI.`);
    else if(res.body.error)
        console.log(res.body.error.message);
    else
        console.log(`${res.body.data[0].label}:\nLatitude: ${res.body.data[0].latitude}\nLongitude: ${res.body.data[0].longitude}`);
});