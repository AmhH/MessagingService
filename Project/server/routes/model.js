var mongoose = require('moongose');
mongoose.connect('mongodb://username:password@host:port/?database?option...');
var Schema = mongoose.Schema;

var Address = new Schema({ 
                            street: String,
                            city: String,
                            state: Date,
                            zipCode: Number,
                            country: String
                         });

var Message = new Schema({ 
                            mailer: {type: String, index: true},
                            receiver: {type: String, index: true},
                            subject: String,
                            content: String,
                            isread: Boolean,
                            type: String,
                            label: String
                         });

var Contact = new Schema({ 
                            fullname: {type: String, index: true, unique: true},
                            email: {type: String, index: true},
                            phone: String
                         });

var Credential = new Schema({ 
                            userName: {type: String, index: true, unique: true},
                            password: String
                         });

var User = new Schema({ 
                            fName: {type: String, index: true},
                            lName: {type: String, index: true},
                            dob: Date,
                            address: [Address],
                            messages: [Message],
                            contacts: [Contact]                            
                         });

module.exports = {
                    User,
                    Address,
                    Message,
                    Contact,
                    Credential,
                };