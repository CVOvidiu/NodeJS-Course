const request = require('request');

const positionstack = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=b07a7159219a8ae12cb2c7280f13e2f6&query=${encodeURIComponent(address)}`; // 'encodeURIComponent' to avoid problems created by special characters

    // This is an asynchronous task
    request({url, json: true}, (err, {body}) => {
        if(err)
            callback(`Unable to connect to location services.`, undefined); // We want to do something when with the error
        else if(body.error)
            callback(`Unable to find location`, undefined);
        else
            callback(undefined, {
                location: body.data[0].label,
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude
            });
    });
};

module.exports = positionstack;