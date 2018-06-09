const persistence = require('./persistence');
const bodyParser = require('body-parser');


module.exports.rest = function (app) {
  app.use(bodyParser.json());

  app.get('/', (request, response) => {
    persistence.getAllRooms()
      .exec((err, r) => {
        if (err) return console.error(err);
        response.send(r);
      });
  });

  app.get('/room', (request, response) => {
    const locationQuery = request.query.location || 'no location';
    persistence.getRoomByLocation(locationQuery);
    response.send('good');
  });

  app.post('/room', (request, response) => {
    const room = request.body;
    persistence.addNewRoom(room)
      .then(room => response.send(room))
      .catch(err => response.send('An error occurred while adding a new room.'));
  });

};
