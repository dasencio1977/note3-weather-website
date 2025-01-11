const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=22a9d6f4d1fdf06fcd7e66f0ba112d44&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast