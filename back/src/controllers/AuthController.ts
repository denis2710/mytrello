import { Request, Response, NextFunction } from "express";

class AuthController { 

    public authUser(req: Request, res: Response, next: NextFunction) : void { 
        console.log('auth')
        return next()
    }

}

export default new AuthController()