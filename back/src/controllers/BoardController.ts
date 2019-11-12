import { Response, Request } from "express"
import AuthParams from "../Interfaces/AuthParams"
import BoardModel from '../models/BoardModel'
import BoardInterface from "../Interfaces/BoardInterface"
import CreateUserDto from "../dto/CreateBoardDTO"
import IPrivacity from "../enums/PrivacityEnum"
import CreateBoardDTO from "../dto/CreateBoardDTO"

class BoardController { 
    public async getAll (req: Request, res: Response ) : Promise<Response> { 
        const { uuserid } = <AuthParams>req.body.decoded
        const boards = await BoardModel.find({ $or: [ 
                    {'creathor_id': uuserid },
                    { 'members_id' : { '$in': [uuserid]} } 
                ] })

        return res.send(boards)
    }

    public async findOne (req: Request, res: Response) : Promise<Response> { 
        const { uuserid } = <AuthParams>req.body.decoded
        const id = req.params.id
        const board = await BoardModel.findOne({ _id : id , '$or' : [{ user_creator : {'$in' : [uuserid] } }] })        
        return res.send(board)
    }

    public async create (req: Request, res: Response) : Promise<Response> {
        try {
            const { uuserid } = <AuthParams>req.body.decoded
            const createBoardDto : CreateBoardDTO = <CreateUserDto>req.body
            const board : BoardInterface =  { 
                creathor_id: uuserid, 
                title: createBoardDto.title, 
                privaicty: IPrivacity.PUBLIC, 
            }
    
            const boardCreated : BoardInterface = await BoardModel.create(board)
            
            return res.send(boardCreated)
        } catch (error) {
            res.status(500).send(error.message)
        }
        
    }

    public async delete (req: Request, res: Response) : Promise<Response> { 
        const { uuserid } = <AuthParams>req.body.decoded
        const id = req.params.id
        const board = await BoardModel.findOne({ _id : id , '$or' : [{ user_creator : {'$in' : [uuserid] } }] })
        await board.remove()
        return res.send(board)
    }

    public async update (req: Request, res: Response) : Promise<Response> { 
        const { uuserid } = <AuthParams>req.body.decoded
        
        const id = req.params.id
        const board = await BoardModel.findOne({ _id : id , '$or' : [{ user_creator : {'$in' : [uuserid] } }] })

        const createBoardDto : CreateBoardDTO = <CreateUserDto>req.body
        const boardNew : BoardInterface =  { 
            creathor_id: uuserid, 
            title: createBoardDto.title, 
            privaicty: IPrivacity.PUBLIC, 
        }

        await board.update(boardNew);

        return res.send(boardNew)    
    }

}

export default new BoardController()
