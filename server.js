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
  // if (dateTime/1000 > 0) {
  //   json = {
  //       unix: dateTime/1000,
  //       natural: dateTime.toLocaleString(locale, { month: "long" }) + " " + dateTime.getDay() + ", " + dateTime.getFullYear()
  //   }
  // }

  // console.log("json:" + json)
  // res.end(req.params.timeParam, function(data) {
  //     var dateTime = Date(data)
  // if (dateTime/1000 > 0) {
  //   json = {
  //       unix: dateTime/1000,
  //       natural: dateTime.toLocaleString(locale, { month: "long" }) + " " + dateTime.getDay() + ", " + dateTime.getFullYear()
  //   }
  // }
  // })
  var time = req.params.timeParam
  res.end(naturalTime(time))
})

app.listen(process.env.PORT|3000, function () {
  console.log(`Timestamp app listening on port ${process.env.PORT|3000}!`)
})
function naturalTime(time) {
  if (isNaN(time)) {
    dateTime = new Date(Date.parse(time))
  } else {
    dateTime = new Date(time * 1000)
  }

  json.unix = dateTime.getTime() / 1000
  json.natural = dateTime.toLocaleString(locale, { month: "long" }) + " " + dateTime.getDay() + ", " + dateTime.getFullYear()
  return JSON.stringify(json)
}
