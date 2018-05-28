// Dependencies
// =============================================================
var friends = require('../data/friends.js');

module.exports = function(app) {
  // Friends GET route will be used to display a JSON of all possible friends
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

  // Friends post route will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(req, res) {
      friends.push(req.body);
  });
};