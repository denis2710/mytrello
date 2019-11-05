import { Document } from 'mongoose'

interface UserInterface extends Document { 
    userId?: string, 
    firstName: string,
    lastName: string,
    username: string,
    password?:string,
    email?: string,
}

export default UserInterface
