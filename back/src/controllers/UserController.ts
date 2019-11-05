import { Request, Response } from "express"
import UserModel from "../models/UserModel";

class User { 
    
    public async create(req: Request, res: Response) : Promise<Response> { 
        const { firstName, lastName, username, password, email } = req.body
        
        const newUser = { firstName, lastName, username, password, email }

        const user = await UserModel.create(newUser)
        
        return res.send(user)
    }

    public async getAll(req: Request, res: Response) : Promise<Response> { 
        const users = await UserModel.find()
        return res.send(users)
    }
}

export default new User()