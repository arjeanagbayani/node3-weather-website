const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0e4137ce55eee708b62a0574f878ac98&query=' + latitude + ',' + longitude 
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another one', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast