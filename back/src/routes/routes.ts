import { Router } from 'express'

class Routes {
  public routes: Router

  constructor () {
    this.routes = Router()
  }
}

export default new Routes().routes
