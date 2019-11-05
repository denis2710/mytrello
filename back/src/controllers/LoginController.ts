import { Request, Response } from "express";
import UserModel from "../models/UserModel";

class LoginController { 

    public login(req: Request, res: Response) : Response { 
        const token = "fsdfsdfrsedfwerewrwe"
        return res.send({sucess: true, token})
    }

}

export default new LoginController()