var express = require('express')
var locale = "en-us"
var app = express()
var json = {
  unix: null,
  natural: null
}

app.get('/', function (req, res) {
  res.end(JSON.stringify(json))
})

app.get('/:timeParam', function (req, res) {
  var time = req.params.timeParam
  res.end(naturalTime(time))
})

app.listen(process.env.PORT, function () {
  console.log(`Timestamp app listening on port ${process.env.PORT}!`)
})

function naturalTime(time) {
  var dateTime
  if (isNaN(time)) {
    dateTime = new Date(Date.parse(time))
  } else {
    dateTime = new Date(time * 1000)
  }

  json.unix = dateTime.getTime() / 1000
  json.natural = dateTime.toLocaleString(locale, { month: "long" }) + " " + dateTime.getDay() + ", " + dateTime.getFullYear()
  return JSON.stringify(json)
}
