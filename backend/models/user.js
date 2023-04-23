const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true
    },
    password: {
         type: String, 
         required: true 
    }
});

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign(
        { 
           _id: this.id
        },
        process.env.PRAVATEKEY, 
        { expiresIn: "2hrs" }
        );
        return token
};
const User = mongoose.model("User", userSchema);
//User validation

const valifate = (data) => {
    const schema = joi.object({
        username: joi.string().required().label("username"),
        email: joi.string().required().label("email"),
        password: passwordComplexity().required().label("password")
    });
    return schema.validate(data)
}
module.exports = {user, validate};