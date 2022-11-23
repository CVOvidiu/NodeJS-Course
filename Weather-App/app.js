const positionstack = require(`./utils/positionstack.js`);
const forecast = require('./utils/forecast.js');

if(process.argv[2]) {
    positionstack(process.argv[2], (error, {latitude, longitude, location} = {}) => { // When positionstack throws an error, we would destructure 'undefined', so that's why '= {}', it sets an empty object as default
        if(error)
            return console.log(error);
        
        forecast(latitude, longitude, (error, forecastData) => {
            if(error)
                return console.log(error);
    
            console.log(location);
            console.log(forecastData);
        })
    });
} else {
    console.log('Error: Enter a valid location!');
}