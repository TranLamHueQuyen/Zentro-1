import mongoose from 'mongoose'
const { Schema, Types, model } = mongoose

const paymentMethodSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'user',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cardName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const PaymentMethod = model('payMethod', paymentMethodSchema);

export default PaymentMethod;