//@Author: Ameha
const express = require('express');
const router = express.Router();
const User = require('./model/model').User;
const aman = require('./model/model').aman;
const ameha = require('./model/model').ameha;
const mera = require('./model/model').mera;

/*
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
*/
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
                     //console.log(data.length)
                     res.json(data)
            }
        });
});

module.exports = router;