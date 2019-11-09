import { Request, Response } from "express"
import bcrypt from 'bcryptjs'
import UserModel from "../models/UserModel"
import AuthController from '../controllers/AuthController'


class LoginController { 

    public async login(req: Request, res: Response) : Promise<Response> { 
        const { username, password } = req.body
        
        const user = await UserModel.findOne({username})      
        if(!user) return res.status(404).send("User or password invalid")

        const autenticated = await bcrypt.compare(password, user.password)
        
        if(autenticated){ 
            const token = AuthController.getToken(user)
            return res.send({token})
        } else { 
            return res.status(404).send("User or password invalid")
        }
    }

}

export default new LoginController()