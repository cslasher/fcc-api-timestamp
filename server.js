var express = require('express')
var locale = "en-us"
var app = express()
var json = {
    unix: null,
    natural: null
}

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
    res.end(req.params.timeParam)
})

app.listen(process.env.PORT, function () {
    console.log(`Timestamp app listening on port ${process.env.PORT}!`)
})