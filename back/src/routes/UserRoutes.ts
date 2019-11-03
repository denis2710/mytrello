import { Router } from 'express'
import User from '../controllers/UserController'

class UserRouter {
  public router: Router
  private routerPath: string

  public constructor () {
    this.router = Router()
    this.routerPath = '/user'

    this.get()
    this.post()
    this.put()
    this.delete()
  }

  private get (): void {
    this.router.get(this.routerPath, User.index)
  }

  private post (): void {
    this.router.post(this.routerPath, User.create)
  }

  private put (): void {
    this.router.post(this.routerPath, User.update)
  }

  private delete (): void {
    this.router.post(this.routerPath, User.delete)
  }
}

export default new UserRouter().router
