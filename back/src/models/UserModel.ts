import { model, Schema, Document } from 'mongoose'
import UserInterface from '../Interfaces/UserInterface'

const userSchema = new Schema({
  userId: {
    type: String,
    required: false
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
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 3
  }

}, {
  timestamps: true
})

type UserModelInterface = UserInterface & Document;

export default model<UserModelInterface>('User', userSchema)
