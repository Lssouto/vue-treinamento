const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 3412)

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  if ('OPTIONS' === req.method) {
    return res.send(200)
  }
  next()
})

app.post('/register', (req, res) => {
  res.send({
    message: 'Usuário registrado',
    email: req.body.email
  })
})
