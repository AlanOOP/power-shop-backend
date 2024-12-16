import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string
    email: string
    password: string
    isAdmin: boolean
}

const UserSchema: Schema = new mongoose.Schema({
    name: {
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
    },
    isAdmin: {
        type: Boolean,
    }
}, {
    timestamps: true
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;