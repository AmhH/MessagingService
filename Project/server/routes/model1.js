const User = require('./model').User;
const Address = require('./model').Address;
const Credential = require('./model').Credential;
const Contact = require('./model').Contact;
const Message = require('./model').Message;

var aman = new User({
    fName: 'aman',
    lName: 'aman',
    dob: new Date('09/09/2000'),
    phone: '123456789',
    credential: credential1,
    address: add1,
    messages: [message1B,message2S,message2T]
});

var ameha = new User({
    fName: 'ameha',
    lName: 'ameha',
    dob: new Date('09/09/2000'),
    phone: '123456789',
    credential: credential2,
    address: add2,
    messages: [message1S,message2B,message1T]
});

var mera = new User({
    fName: 'mera',
    lName: 'mera',
    dob: new Date('09/09/2000'),
    phone: '123456789',
    credential: credential3,
    address: add2
});

var add1 = new Address({
    street: '1000 4th st',
    city: 'Fairfiled',
    state: 'IA',
    zipCode: 52556,
    country: 'USA'
});

var add2 = new Address({
    street: '465 Main st',
    city: 'Fairfiled',
    state: 'IA',
    zipCode: 52558,
    country: 'USA'
});

var credential1 = new Credential({
    userName: 'aman',
    password: 'aman'
});

var credential2 = new Credential({
    userName: 'ameha',
    password: 'ameha'
});

var credential3 = new Credential({
    userName: 'mera',
    password: 'mera'
});

var message1B = new Message({
    mailer: 'ameha',
    receiver: 'aman',
    subject: 'Hello',
    content: 'Welcome To our mailing service',
    date: new Date(),
    isread: false,
    type: 'primary',
    label: inbox
});

var message1S = new Message({
    mailer: 'ameha',
    receiver: 'aman',
    subject: 'Hello',
    content: 'Welcome To our mailing service',
    date: new Date(),
    isread: false,
    type: 'primary',
    label: sent
});

var message2B = new Message({
    mailer: 'aman',
    receiver: 'ameha',
    subject: 'Thank you',
    content: 'I Love your application and it is a funtastic idea ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: inbox
});

var message2S = new Message({
    mailer: 'aman',
    receiver: 'ameha',
    subject: 'Thank you',
    content: 'I Love your application and it is a funtastic idea ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: sent
});

var message1T = new Message({
    mailer: 'aman',
    receiver: 'ameha',
    subject: 'Notication',
    content: 'how to use our app ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: trash
});

var message2T = new Message({
    mailer: 'ameha',
    receiver: 'aman',
    subject: 'Notication',
    content: 'how to use our app ',
    date: new Date(),
    isread: true,
    type: 'primary',
    label: trash
});

module.exports = {
                    aman,
                    ameha,
                    mera
                };