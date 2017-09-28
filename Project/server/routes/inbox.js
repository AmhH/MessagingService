//@Author: Ameha
const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId
var mongoose = require('mongoose');
const User = require('./model/model').User;

// Get all mail
router.get('/all/:username',(req, res) => {
    var inbox;
        User.find({'userCredential.userName': req.params.username}, {'messages':1, '_id':0})
            .sort('messages.date')
            .exec(function(err, data){
                if(err){
                     res.json(err);
                } else {
                     //console.log(data.length)
                     res.json(data);
            }
        });
});

// Get all inbox
router.get('/:username',  (req, res) => {
    User.aggregate([{'$match':{'userCredential.userName':req.params.username}},{'$project':{'messages':1}},
                        {'$unwind':'$messages'},{'$match':{'messages.label':'inbox'}}/*,
                        {'$group':{'_id':'$_id','messages':{'$push':'$messages'}}}*/,{'$project':{'_id':0}}])
                        .exec(function(err, data){
                                if(err){
                                    res.json(err);
                                } else {
                                    //console.log(data.length)
                                    res.json(data);
                            }
                        });
    });

//unread email: when unreading change the messege isread property to false from false 
router.post('/unread', (req,res) => {
    User.update({'messages._id': new ObjectId(req.body.id)},{'$set':{'messages.$.isread':false}}).exec(function(err, data){
                                if(err){
                                    res.json(err);
                                } else {
                                    //console.log(data.length)
                                    res.json(data);
                            }
                        });
});

//read email: when reading change the messege isread property to true from false
router.post('/read', (req,res) => {
    User.update({'messages._id': new ObjectId(req.body.id)},{'$set':{'messages.$.isread':true}}).exec(function(err, data){
                                if(err){
                                    res.json(err);
                                } else {
                                    //console.log(data.length)
                                    res.json(data);
                            }
                        });
});

//find one email by Id
router.get('/id/:id',(req,res) => {
    //console.log('cast to object id ' + typeof(new ObjectId(req.params.id)));
    User.findById({'messages._id': req.params.id}).exec(function(err, data){
                                if(err){
                                    res.json(err);
                                } else {
                                    //console.log(data.length)
                                    res.json(data);
                            }
                        });
});

module.exports = router;