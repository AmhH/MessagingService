const express = require('express');
const router = express.Router();
var jwt = require('express-jwt');
const User = require('./model').User;

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid JWT on any routes that it is applied to.
var authCheck = jwt({
  secret: new Buffer('_YcCvmGJcnuuXT7AYA_Jy6CdcGFRGzRl', 'base64'),
  audience: 'mwaproject.auth0.com'
});

// Get all mail
router.get('/:username',/*authCheck, */(req, res) => {
    var inbox;
        User.find({'userCredential.userName': req.params.username}, {'messages':1, '_id':0})
            .sort('messages.date')
            .exec(function(err, data){
                if(err){
                     res.json(err);
                } else {
                     console.log(data.length)
                     res.json(data);
            }
        });
});

router.post('/',/*authCheck, */(req, res) => {
    User.findOneAndUpdate({'userCredential.userName': req.body.receiver},
                            {'$push':{'messages':{
                                mailer: req.body.mailer,
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
    User.findOneAndUpdate({'userCredential.userName': req.body.mailer},
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