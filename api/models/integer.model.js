const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let entierSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        max: {
            type: Number,
        },
        min: {
            type: Number,
        },
        default: {
            type: Number,
        },
        testNumber : {
            type: String,
            enum: ['positif', 'negative', 'supp-equal-zero', 'inf-equal-zero'],
            default: 'positif'
        },
        commentaire: {
            type: String,
        }
    },
    {
        collection: 'entiers',
        timestamps: true
    })

const Entier = mongoose.model("Entier", entierSchema);
module.exports = Entier;
