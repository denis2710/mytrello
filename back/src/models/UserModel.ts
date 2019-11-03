import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password?: string,
}

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String
}, {
  timestamps: true
})

export default model<UserInterface>('user', UserSchema)
