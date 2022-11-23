const request = require('request');

const positionstack = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=b07a7159219a8ae12cb2c7280f13e2f6&query=${encodeURIComponent(address)}`; // 'encodeURIComponent' to avoid problems created by special characters

    // This is an asynchronous task
    request({url: url, json: true}, (err, res) => {
        if(err)
            callback(`Unable to connect to location services.`, undefined); // We want to do something when with the error
        else if(res.body.data.length === 0)
            callback(`Unable to find location`, undefined);
        else
            callback(undefined, {
                location: res.body.data[0].label,
                latitude: res.body.data[0].latitude,
                longitude: res.body.data[0].longitude
            });
    });
};

module.exports = positionstack;