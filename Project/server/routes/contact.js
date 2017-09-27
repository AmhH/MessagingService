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

// Get all contacts
router.get('/:username',/*authCheck, */(req, res) => {
        User.find({'userCredential.userName': req.params.username}, {'contacts':1, '_id':0})
            .exec(function(err, data){
                if(err){
                     res.json(err);
                } else {
                     console.log(data.length)
                     res.json(data);
            }
        });
});

/*router.get('/:username',authCheck, (req, res) => {
        User.aggregate([{'$match':{'userCredential.userName':'abaams78@gmail.com'}},{'$project':{'messages':1}},
                        {'$unwind':'$messages'},{'$match':{'messages.label':'sent'}},{'$project':{'_id':0}}])
                        .exec(function(err, data){
                                if(err){
                                    res.json(err);
                                } else {
                                    console.log(data.length)
                                    res.json(data);
                            }
                        });

});*/

router.post('/:username',/*authCheck, */(req, res) => {
    User.findOneAndUpdate({'userCredential.userName': req.body.username},
                            {'$push':{'contacts':{
                                fullname: req.body.fullname,
                                email: req.body.email,
                                phone: req.body.phone | ''
                            }}}, {'messages':1, '_id':0}, (err, data) =>{
                                if(err) res.json(err);
                                //else res.json(data);
                            });
    });

router.get('/search',/*authCheck, */(req, res) => {
    User.find({})
});

module.exports = router;