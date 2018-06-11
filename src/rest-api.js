const persistence = require('./persistence');
const bodyParser = require('body-parser');
const cors = require('cors');


module.exports.rest = function (app) {
  app.use(bodyParser.json());
  app.use(cors());

  // TODO: remove / path and combine methods: is no query params are passed, then return all rooms

  app.get('/', (request, response) => {
    persistence.getAllRooms()
      .exec((err, rooms) => {
        if (err) return console.error(err);
        response.send(rooms);
      });
  });

  app.get('/room', (request, response) => {
    const locationQuery = request.query.location;
    const isBookedQuery = request.query.isBooked;
    if (locationQuery) {
      persistence.getRoomsByLocation(locationQuery)
        .exec((err, rooms) => {
          if (err) return console.error(err);
          response.send(rooms);
        });
    } else if (isBookedQuery) {
      isBookedQuery && persistence.getRoomsByBooked(isBookedQuery)
        .exec((err, rooms) => {
          if (err) return console.error(err);
          response.send(rooms);
        })
    }
  });

  app.post('/room', (request, response) => {
    const room = request.body;
    persistence.addNewRoom(room)
      .then(room => response.send(room))
      .catch(err => {
        response.status(400);
        response.send(err.message);
      });
  });

  app.put('/room', (request, response) => {
    const room = request.body;
    persistence.updateRoomStatus(room)
      .exec((err, room) => {
        if (err) return console.error(err);
        response.send(room);
      });
  });

};