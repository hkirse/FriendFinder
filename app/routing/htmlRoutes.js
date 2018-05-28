// Dependencies
// =============================================================
var path = require("path");

module.exports = function(app) {
    // Get catch-all route that leads to homepage
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
  
    // Get route to display the survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
  };