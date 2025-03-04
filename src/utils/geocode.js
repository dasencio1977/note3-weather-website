const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGFzZW5jaW8xOTc3IiwiYSI6ImNtNW5kZ21ocTA1bnkya3B0ZnZmemJ4ZnUifQ.V3nqAiq-b5F88hjNbNu9gg&limit=1'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)

        } else if (body.features.length === 0) {
            callback('Unable to find the location. Try another search', undefined)

        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
