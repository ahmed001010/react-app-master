const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const Client = require('./models/Client.model')

const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
)

const app = express()
app.use(cors())

app.use(express.json())
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'development') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.use(express.static('client/build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const uri =
  'mongodb+srv://ArslanGoraya:Minimart11@cluster0-wjxgm.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongoose Connection established')
})

app.post('/sendmail', (req, res) => {
  console.log('in email')
  const { name, email, subject, message } = req.body
  transporter
    .sendMail({
      to: ['gorayaa66@gmail.com'],
      from: 'contact@melliott.io',
      subject: subject,
      html: `<div><h4>Name : ${name}</h4><h4>Email : ${email}</h4><h4>Message : ${message}</h4></div>`
    })
    .then(info => {
      console.log(info)
      return res.json({info})
    })
    .catch(error => {
      return res.json({ error, message: 'Email cannot be sent!' })
    })
})


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
