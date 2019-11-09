import { Router } from "express";
import BoardController from "../controllers/BoardController";

class BoardRoutes { 
    public router: Router
    public endpoint: string


    public constructor() { 
        this.router = Router()
        this.endpoint = '/board'

        this.router.get(this.endpoint, BoardController.getAll)
    }
}

export default new BoardRoutes().router
