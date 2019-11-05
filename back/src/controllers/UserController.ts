import { Request, Response } from "express"
import UserModel from "../models/UserModel";
import bcrypt from 'bcryptjs'
import configEncript from '../config/encript'

class User { 
    
    public async create(req: Request, res: Response) : Promise<Response> { 
        const { firstName, lastName, username, password, email } = req.body
        const newUser = { firstName, lastName, username, password, email }

        newUser.password = bcrypt.hashSync(password, configEncript.saltingRounds)
        
        let user = await UserModel.create(newUser)
        user.password = undefined
        return res.send(user)
    }

    public async getAll(req: Request, res: Response) : Promise<Response> { 
        const users = await UserModel.find()
        return res.send(users)
    }
}

export default new User()