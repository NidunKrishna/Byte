const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNo: { type: Number, required: true },
    about: { type: String, required: true },
    joinedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
