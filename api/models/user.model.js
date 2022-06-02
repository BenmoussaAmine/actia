const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  email: { type: String, unique: true },
  password: { type: String }
});



//set Password crypted
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};
//validate password crypted
userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};
//generate jwt token
userSchema.methods.generateJwt = function () {
    return jwt.sign({
            _idConnected: this._id,
            emailConnected: this.email,
            usernameConnected: this.username,
        
        },
        process.env.MY_SECRET
        , {expiresIn: '3600s'});
};


const User = mongoose.model("User", userSchema);
module.exports = User;