import { Router } from 'express'
import UserController from '../controllers/UserController'
import UserValidation from '../validations/UserValidation'

class UserRoutes {
    public router: Router
    private endpoint: string

    constructor () {
      this.router = Router()
      this.endpoint = '/user'

      this.router.post(this.endpoint, UserValidation.createUser,  UserController.create)
    }
}

export default new UserRoutes().router
