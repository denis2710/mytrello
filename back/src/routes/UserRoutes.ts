import { Router } from 'express'
import UserController from '../controllers/UserController'
import UserValidation from '../validations/UserValidation'

class UserRoutes {
    public router: Router
    private endpoint: string

    constructor () {
      this.router = Router()
      this.endpoint = '/user'

      this.router.get(this.endpoint, UserController.findAll)
      this.router.get(`${this.endpoint}/:id`, UserController.findById)

      this.router.post(this.endpoint, UserController.create)
      this.router.patch(`${this.endpoint}/:id`, UserController.update)
      this.router.delete(`${this.endpoint}/:id`, UserController.delete)
    }
}

export default new UserRoutes().router
