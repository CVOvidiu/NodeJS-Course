/*
    Use the positionstack API to print the lat/long for Bucharest
    1. Fire off a new request to the URL explored in browser
    2. Have the request module parse it as JSON
    3. Print both the lat and long to the console
    4. Test your work.
*/

const request = require('request');

const url = "http://api.positionstack.com/v1/forward?access_key=yourKey&query=Bucharest"

request({url: url, json: true}, (err, res) => {
    console.log(`${res.body.data[0].label}:\nLatitude: ${res.body.data[0].latitude}\nLongitude: ${res.body.data[0].longitude}`)
});