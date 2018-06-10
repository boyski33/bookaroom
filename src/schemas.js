const Schema = require('mongoose').Schema;

const roomSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: String,
    capacity: Number,
    isBooked: Boolean
  },
  {
    versionKey: false
  }
);

module.exports.roomSchema = roomSchema;
