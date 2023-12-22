import mongoose from 'mongoose'
const { Schema, Types, model } = mongoose
const estateSchema = new Schema({
    name: { type: String, required: true },
    listType: {
        rent: {
            type: Boolean,
        },
        sell: {
            type: Boolean,
        },
    },
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
    rating_star: Number,
    price: {
        sell: { type: Number },
        rent: { type: Number }
    },
    rental: {
        type: Boolean,
    },
    property: {
        bedroom: { type: Number },
        bathroom: { type: Number },
        floors: { type: Number },
    },
    likes: [{ type: Types.ObjectId, ref: 'user' }],
    reviews: [{ type: Types.ObjectId, ref: 'review' }],
    user: { type: Types.ObjectId, ref: 'user' }
}, {
    timestamps: true
})

export default model('estate', estateSchema)