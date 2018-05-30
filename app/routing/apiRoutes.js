// Dependencies
// =============================================================
var animals = require('../data/friends');
var path = require("path");

module.exports = function(app) {
  // Friends GET route will be used to display a JSON of all possible friends
  app.get('/api/friends', function(req, res) {
      res.json(animals);
  });

  // Friends post route will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(req, res) {
      animals.push(req.body);

      console.log("new dog array:"+ animals);
       
      
          console.log(animals);
          console.log("------------------------------------");

          var user = req.body;
            
          var userScores = user.scores;
          console.log("userScores: " + userScores);
        //keeps the loop from comparing the user to themselves
        var loopNum = animals.length - 1;
          var newAnimal = [];
          //loops through array of potential friends
          for (var j = 0; j < loopNum; j++){
            var totalDifference = 0;
                var potentialFriend = animals[j].scores;
                console.log("potential friend scores: " + potentialFriend)
                    //loops through potential friend's scores to compare 
                    for (var m = 0; m < userScores.length; m++ ){
                        totalDifference += Math.abs((userScores[m] - potentialFriend[m]));
                    };
                //adds difference from each potential friend to an array
                newAnimal.push(totalDifference);
            //end for loop
          }

    var matchNum = Math.min.apply(null, newAnimal);
    console.log("matchNum: " +matchNum);
    var findMatch = newAnimal.indexOf(matchNum);
    console.log("findMatch: " +findMatch);
    var dogName = animals[findMatch].name;
    var dogImage = animals[findMatch].photo;

    console.log("dogName: " +dogName);

    var dog = {
        name: dogName,
        photo: dogImage
    }
    
   
    res.json(dog);

        // Add current user to friendsArray
    animals.push(req.body);
  });
};