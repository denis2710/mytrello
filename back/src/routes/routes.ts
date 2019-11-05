import { Router } from 'express'
import AuthController from "../controllers/AuthController"
import UserRoutes from "./UserRoutes"
import BoardRoutes from "./BoardRoutes"
import LoginRoutes from './LoginRoutes'
import { HighlightSpanKind } from 'typescript'

class Routes {
  public routes: Router

  constructor () {
    this.routes = Router()

    this.routes.use(LoginRoutes)
    this.routes.use(UserRoutes)
    
    this.routes.use(AuthController.validateToken, BoardRoutes)
  }
}

export default new Routes().routes
