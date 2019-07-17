const db = require("../models");
require('dotenv').config();
const jwt = require('jsonwebtoken');


module.exports = {
    create: function (req, res) {
        db.User
            .findOne({ username: req.body.username })
            .then(data => data
                ? res.json("username taken")
                : db.User.create(req.body)
                    .then(newUser => {
                        res.json(newUser);
                    })
                    .catch(err => res.json(err)))
            .catch(err => res.json(err));
    },

    login: function (req, res) {
        db.User.findOne({ username: req.body.username })
            .then(data => {
                console.log(data);
                if (data) {
                    //if password matches
                    if (data.password === req.body.password) {
                        const token = jwt.sign({
                            data: 'foobar'
                        }, process.env.SECRET, { expiresIn: '2h' });
                        const userData = {
                            userInfo: data,
                            token: token
                        }
                        res.json(userData);
                    }
                    else {
                        return res.json("bad password");
                    }
                }
                else {
                    console.log("in else");
                    return res.json("bad username")
                }
            })
            .catch(err => console.log(err))
    },

    populated: function(req, res){
        db.User.findById(req.body.userID)
        .populate("entries")
        .then(function(dbUser){
            console.log(dbUser);
          res.json(dbUser);

        })
        .catch(function(err){
          res.json(err);
        });
    },

    findAll: function(req, res){
        db.User.findAll({})
            .then(function(dbUser){
                console.log(dbUser);
            })
            .catch(err => console.log(err));
    },
    findById: function (req, res) {
        console.log("findById");
        console.log(req.body);
        db.User.findOne({ name: req.body.name })
            .then((data) => res.json(data))
            .catch(err => console.log(err));
    },

    Submit: function (req, res) {
        // console.log(req.body);
        db.User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.json(err));
    }
}