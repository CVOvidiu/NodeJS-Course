const positionstack = require(`./utils/positionstack.js`);
const forecast = require('./utils/forecast.js');

/*
    Goal: Accept location via command line argument
    1. Access the command line argument without yargs
    2. Use the string value as the input for positionstack
    3. Only positionstack if a location was provided
    4. Test your work with a couple locations
*/

if(process.argv[2]) {
    positionstack(process.argv[2], (error, data) => {
        if(error)
            return console.log(error);
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error)
                return console.log(error);
    
            console.log(data.location);
            console.log(forecastData);
        })
    });
} else {
    console.log('Error: Enter a valid location!')
}