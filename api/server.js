const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

let widgets = []

const app = express()

app.use(cors({ credentials: true }))

app.get('/widgets', (req, res) => {
  res.send(widgets)
})

app.post('/widgets', bodyParser.json(), (req, res) => {
  console.log(req.body)
  widgets = [...widgets, req.body]
  res.send({ ok: true })
})

app.listen(3000)
