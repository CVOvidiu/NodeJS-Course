/*
    Goal: Use the weatherstack API to generate the string with temperatures for Bucharest.
*/

const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=yourKey&query=44.4268,26.1025';

request({url: url, json: true}, (err, res) => {
    const temperature = res.body.current.temperature;
    const feelsLike = res.body.current.feelslike;
    
    console.log(`It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees out.`);
});