const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient;
const PORT = require('./config.json').serverPort;
const roomSchema = require('./schemas').roomSchema;
require('./rest-api').rest(app);
const persistence = require('./persistence');




persistence.connectToDb();

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
