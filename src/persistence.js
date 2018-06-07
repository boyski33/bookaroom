const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const connectionUrl = "mongodb+srv://user1:drOetker@bookaroom-cluster-4mp6e.mongodb.net/test?retryWrites=true"
const roomSchema = require('./schemas').roomSchema;

const Room = mongoose.model('Room', roomSchema);

module.exports.connectToDb = function () {
  mongoose.connect(connectionUrl);
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('connected to db');

    // room1.save((err, room1) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log(room1.location);
    // })

  });
};

module.exports.getRoomByLocation = function(loc) {
  Room.find({location: loc}, (err, room) => {
    console.log(room);
  });
};


module.exports.getAllRooms = function() {
  return Room.find((err, rooms) => {
    return rooms;
  });
};

