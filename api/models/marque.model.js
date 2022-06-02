const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let marqueSchema = new Schema({
name: {
    type: String,
    required: true
    },
},
{ 
    collection: 'marques',
    timestamps: true
})

const Marque = mongoose.model("Marque",marqueSchema);
module.exports = Marque;