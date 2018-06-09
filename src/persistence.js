const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const connectionUrl = require('./config.json').connectionUrl;
const roomSchema = require('./schemas').roomSchema;

const Room = mongoose.model('Room', roomSchema);

module.exports.connectToDb = function () {
  mongoose.connect(connectionUrl);
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => console.log('connected to db'));
};

module.exports.getAllRooms = function () {
  return Room.find((err, room) => {
    if (err) return console.error(err);
  });
};

module.exports.getRoomsByLocation = function (loc) {
  return Room.find({ location: loc }, (err, room) => {
    if (err) return console.error(err);
  });
};

module.exports.getRoomsByName = function (name) {

};

module.exports.getRoomsByBooked = function (name) {

};

module.exports.addNewRoom = function (room) {
  const newRoom = new Room(room);
  return newRoom.save();
}

module.exports.updateRoomStatus = function (room) {
  const query = {
    name: room.name,
    location: room.location,
  };
  return Room.findOneAndUpdate(query, { isBooked: room.isBooked });
}
