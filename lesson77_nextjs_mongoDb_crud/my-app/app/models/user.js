import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: {
        street: String,
        zipcode: String,
        country: String
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User