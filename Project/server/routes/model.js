var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MessaginService',{useMongoClient: true});
//mongoose.connect('mongodb://username:password@host:port/?database?option...');
var Schema = mongoose.Schema;

var Address = new Schema({ 
                            street: String,
                            city: String,
                            state: String,
                            zipCode: Number,
                            country: String
                         });

var Message = new Schema({ 
                            mailer: {type: String, index: true},
                            receiver: {type: String, index: true},
                            subject: String,
                            content: String,
                            date: Date,
                            isread: Boolean,
                            type: String,
                            label: String
                         });

var Contact = new Schema({ 
                            fullname: {type: String, index: true, unique: true, sparse: true},
                            email: {type: String, index: true, sparse: true},
                            phone: String
                         });

var UserCredential = new Schema({ 
                            userName: {type: String, index: true, unique: true},
                            password: String
                         });

var userSchema = new Schema({ 
                            fName: {type: String, index: true},
                            lName: {type: String, index: true},
                            dob: Date,
                            phone: String,
                            userCredential: UserCredential,
                            address: Address,
                            messages: [Message],
                            contacts: [Contact]                            
                         });

//userSchema.index({fName:1, credential:userName})

/*var Address = mongoose.model('User', addressSchema);
//var UserCredential = mongoose.model('UserCredential', credentialSchema);
var Message = mongoose.model('Message', messageSchema);
var Contact = mongoose.model('Contact', contactSchema);  */                   
var User = mongoose.model('User', userSchema);

var aman = new User({
    fName: 'aman',
    lName: 'aman',
    dob: new Date('09/09/2000'),
    phone: '123456789',
    /*userCredential: credential1,
    address: add1,
    messages: [message1B,message2S,message2T]*/
});

var ameha = new User({
    fName: 'ameha',
    lName: 'ameha',
    dob: new Date('09/09/2000'),
    phone: '123456789',
    /*userCredential: credential2,
    address: add2,
    messages: [message1S,message2B,message1T]*/
});

var mera = new User({
    fName: 'mera',
    lName: 'mera',
    dob: new Date('09/09/2000'),
    phone: '123456789',
    /*userCredential: credential3,
    address: add2*/
});

aman.address = {
    street: '1000 4th st',
    city: 'Fairfiled',
    state: 'IA',
    zipCode: 52556,
    country: 'USA'
};

ameha.address = {
    street: '465 Main st',
    city: 'Fairfiled',
    state: 'IA',
    zipCode: 52558,
    country: 'USA'
};

mera.address = {
    street: '465 Main st',
    city: 'Fairfiled',
    state: 'IA',
    zipCode: 52558,
    country: 'USA'
};

aman.userCredential = {
    userName: 'aman',
    password: 'aman'
};

ameha.userCredential = {
    userName: 'ameha',
    password: 'ameha'
};

mera.userCredential = {
    userName: 'mera',
    password: 'mera'
};

aman.messages.push({
    mailer: 'ameha',
    receiver: 'aman',
    subject: 'Hello',
    content: 'Welcome To our mailing service',
    date: new Date(),
    isread: false,
    type: 'primary',
    label: 'inbox'
});

ameha.messages.push({
    mailer: 'ameha',
    receiver: 'aman',
    subject: 'Hello',
    content: 'Welcome To our mailing service',
    date: new Date(),
    isread: false,
    type: 'primary',
    label: 'sent'
});

ameha.messages.push({
    mailer: 'aman',
    receiver: 'ameha',
    subject: 'Thank you',
    content: 'I Love your application and it is a funtastic idea ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: 'inbox'
});

aman.messages.push({
    mailer: 'aman',
    receiver: 'ameha',
    subject: 'Thank you',
    content: 'I Love your application and it is a funtastic idea ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: 'sent'
});

ameha.messages.push({
    mailer: 'aman',
    receiver: 'ameha',
    subject: 'Notication',
    content: 'how to use our app ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: 'trash'
});

aman.messages.push({
    mailer: 'ameha',
    receiver: 'aman',
    subject: 'Notication',
    content: 'how to use our app ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: 'trash'
});

module.exports = {
                    User,
                    aman,
                    ameha,
                    mera
                };

/*module.exports = {
                    User,
                    Address,
                    Message,
                    Contact,
                    Credential
                };*/