const Schema = require('mongoose').Schema;

const roomSchema = Schema({
  name: String,
  location: String
});

module.exports.roomSchema = roomSchema;
