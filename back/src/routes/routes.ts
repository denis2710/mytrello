import { Router } from 'express'
import RouterUser from './UserRoutes'

class Routes {
  public router: Router

  constructor () {
    this.router = Router()

    this.router.use(RouterUser)
  }
}

export default new Routes().router
