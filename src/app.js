const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient;
const connectionUrl = "mongodb+srv://user1:drOetker@bookaroom-cluster-4mp6e.mongodb.net/test?retryWrites=true"
const PORT = 3000;
const roomSchema = require('./schemas').roomSchema;
require('./rest-api').rest(app);

const Room = mongoose.model('Room', roomSchema);
let room1 = new Room({
  name: 'Peter Parker Hall',
  location: 'Building I'
});

mongoose.connect(connectionUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected?');

  // room1.save((err, room1) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(room1.location);
  // })
  Room.findOne({ name: 'Peter Parker Hall' }, (err, room) => {
    if (err) throw err;
    console.log(room.location);
  });
});

// MongoClient.connect(connectionUrl, (err, client) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to DB...');
//   const dataBase = client.db('test');
//   // dataBase.createCollection('rooms');
//   const collection = dataBase.collection('rooms');

//   // collection.insertOne({
//   //   location: 'Building B'
//   // })


//   collection.find({
//     location: 'Building B'
//   }).next().then(val => console.log(val));

//   client.close();
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
