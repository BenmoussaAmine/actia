const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stringSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        lengthMax: {
            type: Number,
        },
        lengthMin: {
            type: Number,
        },
        length: {
            type: Number,
        },
        regex: {
            type: String,
            enum: ['entier', 'chaine', 'mixte'],
            default: 'mixte'
        },
        commentaire: {
            type: String,
        }
    },
    {
        collection: 'strings',
        timestamps: true
    })

const Chaine = mongoose.model("String", stringSchema);
module.exports = Chaine;
