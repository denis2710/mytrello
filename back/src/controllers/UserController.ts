import { Request, Response } from 'express'
import UserModel from '../models/UserModel'

class UserController {
  /**
   * Get all Users
   * @param req
   * @param res
   */
  public async findAll (req : Request, res: Response) : Promise<Response> {
    const limit = parseInt(req.params.limit) || 1000
    const offset = parseInt(req.params.offset) || 0

    try {
      const users = await UserModel.find().skip(offset).limit(limit)

      return res.json(users)
    } catch (error) {
      const errorMessage = {
        code: 500,
        message: 'An Error ocour during the search'
      }
      return res.status(500).json(errorMessage)
    }
  }

  public async findById (req: Request, res: Response) : Promise<Response> {

  }

  public create (req : Request, res: Response) : Response {
    return res.send('create user')
  }

  public update (req : Request, res: Response) : Response {
    return res.send('update user')
  }

  public delete (req : Request, res: Response) : Response {
    return res.send('delete user')
  }
}

export default new UserController()
