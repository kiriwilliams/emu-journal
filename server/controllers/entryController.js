const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        // console.log(req.query);
        db.User.findById(req.query.userID)
        .populate("entries")
        .then(function(dbUser) {
            // console.log(dbUser);
            console.log("entryController.js");
            console.log(dbUser);
          res.json(dbUser.entries);
        })
        .catch(function(err) {
          res.json(err);
        });
    },

    findById: function (req, res) {
        res.json("entryController findById");
    },
    create: function (req, res) {
        // console.log("create");
        // console.log(req.body);
        db.Entry.create(req.body)
            .then(function (newEntry) {
                return db.User.findByIdAndUpdate(req.body.userID, { $push: { entries: newEntry._id } }, { new: true });
            })
            .then(function (dbUser) {
                console.log(dbUser);
                res.json(dbUser);
            })
            .catch(err => console.log(err));
    },

    update: function(req,  res){
        // console.log(req.body);
        db.Entry.findByIdAndUpdate(req.body.noteID,
            { $set: {
                mood: req.body.mood,
                tags: req.body.tags,
                color: req.body.color,
                content: req.body.content
            }}, { new: true })
            .then(dbEntry => {
                res.json(dbEntry);
            })
            .catch( err => console.log(err));
    },

    delete: function(req, res){
        // console.log(req.body.noteID);
        db.Entry.findByIdAndDelete(req.body.noteID)
            .then(deleted => res.json(deleted))
            .catch(err => console.log(err));
    }
}