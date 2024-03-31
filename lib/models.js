import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    Id: {
        type: String,
        required: true,
        unique: true,
    },

    username: {
        type: String, 
        unique: false,
    },

    email: {
        type: String, 
        required: true,
        unique: true,
        max: 50,
    },

    img: {
        type: String,

    },

    isAdmin: {
        type: Boolean,
        default: false,

    },

    Todos: {
        type: Array,
        default: ['This is a Test Todo! Start Creating Todos!'],
    }
    
},{timestamps: true})


export const User = mongoose.models.User || mongoose.model("User", userSchema); 