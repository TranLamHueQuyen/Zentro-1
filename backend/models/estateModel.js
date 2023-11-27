import mongoose from 'mongoose'
const { Schema, Types, model } = mongoose
const estateSchema = new Schema({
    name: String,
    listType: [{ type: String, required: true }],
    address: {
        name: {
            type: String,
            default: ''
        },
        house_number: {
            type: Number,
            default: ''
        },
        road: {
            type: String,
            default: ''
        },
        quarter: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        country: {
            type: String,
            default: ''
        },
        lat: {
            type: String,
            default: ''
        },
        lng: {
            type: String,
            default: ''
        },
    },
    images: {
        type: Array,
        required: true
    },

    price: {
        sell: { type: Number },
        rent: { type: Number }
    },
    property: {
        bedroom: { type: Number },
        bathroom: { type: Number },
        balcony: { type: Number },
    },
    likes: [{ type: Types.ObjectId, ref: 'user' }],
    reviews: [{ type: Types.ObjectId, ref: 'review' }],
    user: { type: Types.ObjectId, ref: 'user' }
}, {
    timestamps: true
})

export default model('estate', estateSchema)