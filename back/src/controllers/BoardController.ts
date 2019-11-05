import { Response, Request } from "express"

class BoardController { 
    public getAll (req: Request, res: Response ) : Response { 
        const fakeBoards = [
            {id: 1, name: 'first board', status: 'active', description: 'a moock board'},
            {id: 2, name: 'seccond board', status: 'active', description: 'ther moock board'},
            {id: 3, name: 'thirth board', status: 'active', description: 'another moock board'}
        ]
        return res.send(fakeBoards)
    }
}

export default new BoardController()
