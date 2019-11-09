import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import UserRoutes from './UserRoutes'
import BoardRoutes from './BoardRoutes'
import LoginRoutes from './LoginRoutes'

class Routes {
  public router: Router

  constructor () {
    this.router = Router()

    this.router.use(LoginRoutes)
    this.router.use(UserRoutes)

    this.router.use(AuthController.validateToken, BoardRoutes)
  }
}

export default new Routes().router
