import { Response, Request } from "express"

class BoardController { 
    public getAll (req: Request, res: Response ) : Response { 
        console.log(req.body.decoded)
        const fakeBoards = [
            {msg: `bem vindo ${req.body.decoded.username}`},
            {id: 1, name: 'first board', status: 'active', description: 'a moock board'},
            {id: 2, name: 'seccond board', status: 'active', description: 'ther moock board'},
            {id: 3, name: 'thirth board', status: 'active', description: 'another moock board'}
        ]
        return res.send(fakeBoards)
    }
}

export default new BoardController()
