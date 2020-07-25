const request = require ('postman-request');


const forecast = (location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + process.env.WEATHER_API_KEY + '&query=' + location
  
    request ({url: url, json: true}, (error, response, body) => {
      if (error) {
        callback('Ei yhteyttä sääpalveluun', undefined)
      } else if (body.error) {
        callback('Ei hakutuloksia.', undefined)
        } else {
          callback(undefined, location + ': ' + body.current.temperature + ' degrees, feels like ' + body.current.feelslike + ' degrees.')
        }
      })
  }

  module.exports = forecast