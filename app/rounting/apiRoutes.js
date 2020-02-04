var friends = require("../Data/friends");



module.exports = function (app) {
    // requestiong data to the client
    app.get("/api/friends", function (req, res) {
        console.log("Hit route /api/friends")
        res.json(friends);
    });
    //giving data to the server 
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            scores: 100000
        }
        // this is all the user data (from the post)
        var userData = req.body;
        // user from from score 
        var userScores = userData.scores;
        // total diff. will compare 
        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            //the current freind in the loop
            var thisFriend = friends[i];
            totalDifference = 0;
            for (var j = 0; j < thisFriend.scores.length; j++) {
                totalDifference += Math.abs(thisFriend.scores[j] - userScores[j]);

            }

            if (totalDifference <= bestMatch.scores) {
                bestMatch.name = thisFriend.name;
                bestMatch.photo = thisFriend.photo;
                bestMatch.scores = totalDifference;
            }

        }
        friends.push(userData);

        res.json(bestMatch);

    });
};
