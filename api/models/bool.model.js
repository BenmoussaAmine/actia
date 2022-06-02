const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let boolSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        test: {
            type: Boolean,
            default: false
        },
        commentaire: {
            type: String,
        }
    },
    {
        collection: 'booleans',
        timestamps: true
    })

const Bool = mongoose.model("Bool", boolSchema);
module.exports = Bool;
