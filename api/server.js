const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

let widgets = [{ name: 'foo' }]

const app = express()

app.use(cors({ credentials: true }))

app.get('/widgets', (req, res) => {
  res.send(widgets)
})

app.post('/widgets', bodyParser.json(), (req, res) => {
  widgets = [...widgets, req.body]
  res.send({ ok: false })
})

app.listen(5000)
