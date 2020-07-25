const path = require('path')
const express = require('express')
const forecast = require('./forecast')

const app = express()

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))


 // request, respond
app.get('/weather', function (req, res) {
  if (!req.query.location) {
    return res.send({
      error: 'Please give a location'
    })
  }

// esim. http://localhost:3000/?location=Joensuu
//  res.send( {
//    forecast: 'Something'
//  })

forecast(req.query.location, (error, data) => {
  if(error) {
    return res.send({error: error})
  }

// ilman aaltosulkua palautetaan tekstiä, aaltosuluilla taas objekti
  res.send({forecast: data})

})
})
 
app.listen(process.env.PORT)