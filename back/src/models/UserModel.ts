import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password?: string,
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  password: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 50
  },
  isAdmin: Boolean
}, {
  timestamps: true
})

export default model<UserInterface>('user', UserSchema)
