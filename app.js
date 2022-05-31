const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ENDPOINTS

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
  // res.render('about-2')
})

app.get('/services', (req, res) => {
  res.render('service')
  // res.render('about-2')
})

app.get('/*', (req, res) => {
  res.render('404')
})

let port = process.env.PORT
if (port == null || port == '') {
  port = 7777
}

app.listen(port, function () {
  console.log('server running at port ' + port)
})
