const express = require('express');
const app = express();
const PORT = require('./config.json').serverPort;
const persistence = require('./persistence');
require('./rest-api').rest(app);

persistence.connectToDb();


// START THE APPLICATION
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
