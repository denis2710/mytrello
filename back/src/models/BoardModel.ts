import { model, Schema, Document } from 'mongoose'
import BoardInterface from '../Interfaces/BoardInterface'
import Privacity from '../enums/PrivacityEnum'

const boardSchema = new Schema({
  id: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  description: {
    type: String,
    required: false,
    maxlength: 50
  },
  color: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 50
  },
  bgImage: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 50
  },
  creathor_id: {
    type: String,
    required: true
  },
  members_id: {
    type: [String],
    required: false
  },
  privaicty: {
    type: Privacity,
    required: false
  }
}, {
  timestamps: true
})

type boardInterface = BoardInterface & Document

export default model<boardInterface>('board', boardSchema)
