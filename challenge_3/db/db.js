const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/multicheckout', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('open', () => console.log('connected!'))
    .on('error', console.error.bind(console, 'MongoDB connection error:'));

const CheckoutModelSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    line1Address: String,
    line2Address: String,
    city: String,
    state: String,
    phoneNumber: String,
    creditCardNumber: String,
    expirationDate: String,
    CVV: String,
    zip: String
});


module.exports = mongoose.model('CheckoutForm', CheckoutModelSchema );
