//@Author: Ameha
const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId
const User = require('./model/model').User;

// Get all trash
router.get('/:username', (req, res) => {
    User.aggregate([{'$match':{'userCredential.userName':req.params.username}},{'$project':{'messages':1}},
                        {'$unwind':'$messages'},{'$match':{'messages.label':'trash'}}/*,
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

//delete email: when deleting change the messege label property to trash from other labels 
router.post('/delete', (req,res) => {
    User.update({'messages._id': new ObjectId(req.body.id)},{'$set':{'messages.$.label':'trash'}})
                    .exec(function(err, data){
                                if(err){
                                    res.json(err);
                                } else {
                                    //console.log(data.length)
                                    res.json(data);
                            }
                        });
});
module.exports = router;