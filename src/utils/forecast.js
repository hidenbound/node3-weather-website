const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/f0d3cb309eb26b29808921a0a1e985db/" + latitude + "," + longitude + "?units=si";

    request({ url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location!', undefined);
        } else {
            var temp = body.currently.temperature;
            var chanceRain = body.currently.precipProbability;
            callback(undefined, body.daily.data[0].summary + " It is currently " + temp + " degrees out. There is a " + chanceRain + " chance of rain.");
        }
    }); 
}

module.exports = forecast;