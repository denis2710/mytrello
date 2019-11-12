import { Router } from "express";
import BoardController from "../controllers/BoardController";

class BoardRoutes { 
    public router: Router
    public endpoint: string


    public constructor() { 
        this.router = Router()
        this.endpoint = '/board'

        this.router.get(this.endpoint, BoardController.getAll)
        this.router.get(`${this.endpoint}/:id`, BoardController.findOne)
        this.router.post(this.endpoint, BoardController.create)
    }
}

export default new BoardRoutes().router
