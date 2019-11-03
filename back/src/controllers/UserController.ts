import { Request, Response } from 'express'
import UserModel from '../models/UserModel'

class UserController {
  public async index (req : Request, res: Response) : Promise<Response> {
    const users = await UserModel.find()

    return res.json(users)
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
