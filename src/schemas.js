const Schema = require('mongoose').Schema;

const roomSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: String,
    capacity: {
      type: Number,
      min: [0, 'Cannot have negative capacity!']
    },
    isBooked: Boolean
  },
  {
    versionKey: false
  }
);

module.exports.roomSchema = roomSchema;
