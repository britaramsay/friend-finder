const friends = require('../data/friends.js')

module.exports = function(app, path){
    app.get("/api/friends", function(req, res) {
        res.json(friends);        
    });
    
    app.post("/api/friends", function(req, res) {
        console.log(req.body)
        var newFriend = req.body;
        friends.push(newFriend)
    });
}