var dogs = require("../data/friends.js")

module.exports = function (app) {
console.log(dogs);
    app.get('/api/friends', function (req, res) {
        res.json(dogs);
    });

    app.post("/api/friends", function (req, res) {
        console.log('in api friends', req.body);
        
        var userInput = req.body;
        var userScores = userInput.scores;

        var bestMatch = {
            bestMatchName: "",
            bestMatchPhoto: "",
            matchScore: 50
        }

        var scoreDiff = 0;

        for (var i = 0; i < dogs.length; i++) {
            scoreDiff = 0
            for (var j = 0; j < 10; j++) {
                scoreDiff = scoreDiff + Math.abs(parseInt(dogs[i].scores[j]) - parseInt(userScores[j]));
            }

            if (scoreDiff < bestMatch.matchScore) {
                bestMatch.bestMatchName = dogs[i].name;
                bestMatch.bestMatchPhoto = dogs[i].photo;
                bestMatch.matchScore = scoreDiff;
            }
        };

        dogs.push(userInput);
        res.json(bestMatch);
    });

};