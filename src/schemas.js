const Schema = require('mongoose').Schema;

const roomSchema = Schema(
  {
    name: String,
    location: String,
    isBooked: Boolean
  },
  {
    versionKey: false
  }
);

module.exports.roomSchema = roomSchema;
