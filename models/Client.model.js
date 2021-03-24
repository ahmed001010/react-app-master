const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    message: {
      type: String
    },
    subject: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Client = mongoose.model('Client', clientSchema)
module.exports = Client
