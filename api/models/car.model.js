const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
name: {
    type: String,
    required: true
},
stock: {
    type: Number,
    default: 0
},
date: {
    type: Date,
    default: Date.now
},
marque: {
    type: Schema.Types.ObjectId,
    ref:'Marque'
},
horses: {
    type: String,
    enum: ['4CH','5CH','8CH'],
    default: '4CH'
},
price: {
    type: Number,
    required: true,
    validate: {
        validator: Number.isInteger,
        message: '{VALUE} doit être un entier'
    }
},
show_price: {
    type: Boolean,
    default: false
},
details: {
        type:[{
            type:String
        }]
}
},
{ 
    collection: 'cars',
    timestamps: true
})

const Car = mongoose.model("Car",carSchema);
module.exports = Car;