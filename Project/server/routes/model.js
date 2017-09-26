var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MessaginService');
//mongoose.connect('mongodb://username:password@host:port/?database?option...');
var Schema = mongoose.Schema;

var addressSchema = new Schema({ 
                            street: String,
                            city: String,
                            state: String,
                            zipCode: Number,
                            country: String
                         });

var messageSchema = new Schema({ 
                            mailer: {type: String, index: true},
                            receiver: {type: String, index: true},
                            subject: String,
                            content: String,
                            date: Date,
                            isread: Boolean,
                            type: String,
                            label: String
                         });

var contactSchema = new Schema({ 
                            fullname: {type: String, index: true, unique: true},
                            email: {type: String, index: true},
                            phone: String
                         });

var credentialSchema = new Schema({ 
                            userName: {type: String, index: true, unique: true},
                            password: String
                         });

var userSchema = new Schema({ 
                            fName: {type: String, index: true},
                            lName: {type: String, index: true},
                            dob: Date,
                            phone: String,
                            credential: Credential,
                            address: Address,
                            messages: [Message],
                            contacts: [Contact]                            
                         });

//userSchema.index({fName:1, credential:userName})

var Address = mongoose.model('User', addressSchema);
var Credential = mongoose.model('Credential', credentialSchema);
var Message = mongoose.model('Message', messageSchema);
var Contact = mongoose.model('Contact', contactSchema);                       
var User = mongoose.model('User', userSchema);

module.exports = {
                    User,
                    Address,
                    Message,
                    Contact,
                    Credential
                };