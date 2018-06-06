const rest = function(app) {
  app.get('/room', (req, res) => {
    console.log(req.query);
  });

  app.get('/', (req, res) => {
    res.send('Hello niggas');
  });

};


module.exports.rest = rest;