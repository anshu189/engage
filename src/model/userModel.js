import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
        unique: true,
    },
    isverified:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})


const User = mongoose.models.users || mongoose.model("users", userScheme);

export default User;