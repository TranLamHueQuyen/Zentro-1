const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dw1sniewf/image/upload/v1669720008/noko-social/audefto1as6m8gg17nu1.jpg'
    },
    mobile: { type: String, default: '' },
    address: { type: String, default: '' },
    listing: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    transaction: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    favorite: [{ type: mongoose.Types.ObjectId, ref: 'user' }]
}, {
    timestamps: true
})


module.exports = mongoose.model('user', userSchema)