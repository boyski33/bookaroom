const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const connectionUrl = "mongodb://user1:drOetker@bookaroom-cluster-shard-00-00-4mp6e.mongodb.net:27017,bookaroom-cluster-shard-00-01-4mp6e.mongodb.net:27017,bookaroom-cluster-shard-00-02-4mp6e.mongodb.net:27017/test?ssl=true&replicaSet=bookaroom-cluster-shard-0&authSource=admin&retryWrites=true"
const PORT = 3000;

MongoClient.connect(connectionUrl, (err, db) => {
  if (err) {
    throw err;
  }
  const dbo = db.db('testDb');
  dbo.createCollection('rooms', (err, res) => {
    if (err) {
      throw err;
    }

    console.log('collection created');
    db.close();
  });


  db.close();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
