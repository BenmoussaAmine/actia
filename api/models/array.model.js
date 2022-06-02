const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let arraySchema = new Schema({
        name: {
            type: String,
            required: true
        },
        values: {
            type: [],
        },
    },
    {
        collection: 'arrays',
        timestamps: true
    })

const Tab = mongoose.model("Array", arraySchema);
module.exports = Tab;
