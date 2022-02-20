const express = require('express')
var bodyParser = require('body-parser')
const db = require('./config/database')

const app = express()
const port = 3002

// Database Name
const jsonParser = bodyParser.json()

  app.post('/message/send', jsonParser, (req, res) => {
    let data = req.body
    let date = new Date()

    let message = db.Message({
      message: data.message,
      date: date,
      sender: data.senderId,
      recipient: data.recipientID
    })

    message.save(function (err, data) {
      if (err) return console.error(err);
      res.json("Message sent");
    });
  })


  app.get('/', (req, res) => {
    res.send('Express server')
  })

  app.listen(port, () => {
    console.log('Server run in port: '+ port);
  })


