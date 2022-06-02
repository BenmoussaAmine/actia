const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reglesSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['array', 'string', 'integer', 'boolean'],
            default: 'string'
        },
        typeArrayId: {
            type: Schema.Types.ObjectId,
            ref: 'Array'
        },
        typeEntierId: {
            type: Schema.Types.ObjectId,
            ref: 'Entier'
        },
        typeStringId: {
            type: Schema.Types.ObjectId,
            ref: 'String'
        },
        typeBoolId: {
            type: Schema.Types.ObjectId,
            ref: 'Bool'
        }
    },
    {
        collection: 'regles',
        timestamps: true
    })

const Regle = mongoose.model("Regle", reglesSchema);
module.exports = Regle;
