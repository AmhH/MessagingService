const express = require('express');
const router = express.Router();
/*const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;*/
const User = require('./model').User;
const aman = require('./model').aman;
const ameha = require('./model').ameha;
const mera = require('./model').mera;

/*// Connect MessaginService
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/MessaginService', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};*/

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
        aman.save((err)=>{
            if(err) throw err;
        });
        ameha.save((err)=>{
            if(err) throw err;
        });
        mera.save((err)=>{
            if(err) throw err;
        })

        User.find()
            .exec(function(err, data){
                if(err){
                     res.json(err)
                } else {
                     console.log(data.length)
                     res.json(data)
            }
        });


     /*req.msDB.collection('users').find().toArray(function(err, result) {
                if (err) throw err;
                res.json(result);
        });*/
});

module.exports = router;