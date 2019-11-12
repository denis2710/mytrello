import { Request, Response, NextFunction } from "express";
import UserInterface from '../Interfaces/UserInterface'
import jwt from "jsonwebtoken";
import encriptConfig from '../config/encript'
import AuthParams from "../Interfaces/AuthParams";

class AuthController { 

    public authUser (req: Request, res: Response, next: NextFunction) : void { 
        console.log('auth')
        return next()
    }

    public getToken (user: UserInterface, ){ 
        const payload = { username: user.username, uuserid: user.id , firstname: user.firstName }
        const options = { expiresIn: '2d' }
        const secret = process.env.JWT_SECRET
        const token = jwt.sign(payload, secret, options)  
        return token 
    }

    public validateToken(req: Request, res: Response, next: NextFunction) : void | Response { 
        const authorizationHeader = req.headers.authorization
        let result: string | object
        
        if(authorizationHeader){
            const token = authorizationHeader.split(' ')[1]
            const options = encriptConfig.options
            
            try {
                result = jwt.verify(token, process.env.JWT_SECRET, options)
                req.body.decoded = <AuthParams>result
            } catch (error) {
                return res.status(403).send('token is not valid')
            }
          
        } else { 
            return res.status(401).send('token is required')
        }
        
        return next()
    }

}

export default new AuthController()