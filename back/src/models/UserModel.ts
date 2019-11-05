import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document { 
    userId?: string, 
    firstName: string,
    lastName: string,
    username: string,
    password?:string,
    email?: string,
}

const userSchema = new Schema({
    userId: { 
        type: String, 
        required: false, 
    },
    firstName: { 
        type: String, 
        required: true, 
        maxlength: 50, 
        minlength: 3 
    },
    lastName: { 
        type: String, 
        required: true, 
        maxlength: 50, 
        minlength: 3 
    },
    username: { 
        type: String, 
        required: true, 
        maxlength: 50, 
        minlength: 3 
    },
    password: { 
        type: String, 
        required: false, 
        maxlength: 50, 
        minlength: 3 
    },
    email: { 
        type: String, 
        required: true, 
        maxlength: 100, 
        minlength: 3 
    },

}, {
    timestamps: true
})

export default model<UserInterface>('User', userSchema)