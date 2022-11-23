const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f7725b2e0cd11286714dca6f854023ca&query=${latitude},${longitude}`;

    request({url: url, json: true}, (err, res) => {
        if(err)
            callback(`Oops! Wrong on your end.`, undefined);
        else if(res.success === false)
            callback(`Request error.`, undefined)
        else {
            const temperature = res.body.current.temperature;
            const feelsLike = res.body.current.feelslike;
            callback(undefined, `It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees out.`);
        }
    })
};

module.exports = forecast;