import { Response, Request } from "express"
import AuthParams from "../Interfaces/AuthParams";

class BoardController { 
    public getAll (req: Request, res: Response ) : Response { 
        const params = <AuthParams>req.body.decoded
        console.log(params.username)
        const fakeBoards = [
            {msg: `bem vindo ${params.firstname}`},
            {id: 1, name: 'first board', status: 'active', description: 'a moock board'},
            {id: 2, name: 'seccond board', status: 'active', description: 'ther moock board'},
            {id: 3, name: 'thirth board', status: 'active', description: 'another moock board'}
        ]
        return res.send(fakeBoards)
    }
}

export default new BoardController()
