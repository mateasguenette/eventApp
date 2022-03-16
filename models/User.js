const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Your password should be atleast 6 characters"]
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
    
}
,
    {
        timestamps: true
    })


    // verifyPassword
    userSchema.methods.verifyPassword = function(password){
        console.log(password);
        console.log(this.password);
        return bcrypt.compareSync(password, this.password);
    }

const User = mongoose.model("User", userSchema);

module.exports = User;


