import { Router } from "express"
import UserController from "../controllers/UserController"
import LoginController from "../controllers/LoginController"

class LoginRoutes { 
    public router: Router
    private endpoint: string 

    public constructor(){ 
        this.router = Router()
        this.endpoint = '/login'

        this.router.post(this.endpoint, LoginController.login)
    }
    
}

export default new LoginRoutes().router