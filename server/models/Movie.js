const { Schema, model } = require('mongoose');

const MovieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        imageTitle: {
            type: String
        },
        imageThumbnail: {
            type: String
        },
        trailer: {
            type: String
        },
        video: {
            type: String
        },
        year: {
            type: String
        },
        ageLimit: {
            type: Number
        },
        genre: {
            type: String
        },
        isSeries: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

module.exports = model('Movie', MovieSchema)