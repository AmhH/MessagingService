//@Author: Ameha
const express = require('express');
const router = express.Router();
const User = require('./model/model').User;

// Get all sent
router.get('/:username', (req, res) => {
    User.aggregate([{'$match':{'userCredential.userName':req.params.username}},{'$project':{'messages':1}},
                        {'$unwind':'$messages'},{'$match':{'messages.label':'sent'}}/*,
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

//send email 
router.post('/',(req, res) => {
    //add to message array of the receiver and set to unread
    User.findOneAndUpdate({'userCredential.userName': req.body.receiver},
                            {'$push':{'messages':{
                                mailer: req.body.email,
                                receiver: req.body.receiver,
                                subject: req.body.subject,
                                content: req.body.content,
                                date: new Date(),
                                isread: false,
                                type: 'primary',
                                label: 'inbox'
                            }}}, {'messages':1, '_id':0}, (err, data) =>{
                                if(err) res.json(err);
                                //else res.json(data);
                            });

    //add to message array of the sender and set to sent item
    User.findOneAndUpdate({'userCredential.userName': req.body.email},
                            {'$push':{'messages':{
                                mailer: req.body.mailer,
                                receiver: req.body.receiver,
                                subject: req.body.subject,
                                content: req.body.content,
                                date: new Date(),
                                isread: false,
                                type: 'primary',
                                label: 'sent'
                            }}}, {'messages':1, '_id':0}, (err, data) =>{
                                if(err) res.json(err);
                                else res.json(data);
                            });
});

module.exports = router;