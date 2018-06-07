const persistence = require('./persistence');

module.exports.rest = function (app) {
  app.get('/room', (req, res) => {
    const locationQuery = req.query.location || 'no location';
    persistence.getRoomByLocation(locationQuery);
    res.send('good');
  });

  app.get('/', (req, res) => {
    persistence.getAllRooms()
      .exec((err, r) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(r);
      });
  });

};
