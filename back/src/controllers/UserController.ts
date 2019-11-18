import { Request, Response } from 'express'
import UserModel from '../models/UserModel'
import UserInterface from '../Interfaces/UserInterface'

class UserController {
  public async index (req : Request, res: Response) : Promise<Response> {
    const users = await UserModel.find()

    return res.json(users)
  }

  public async create (req : Request, res: Response) : Promise<Response> {
    const { firstName, lastName, username, password, email }  = req.body 

    const user : UserInterface = {
      firstName,
      lastName,
      username,
      password,
      email,
    }

    

    const newUser = await UserModel.create(user); 

    return res.send(newUser)
  }

  public update (req : Request, res: Response) : Response {
    return res.send('update user')
  }

  public delete (req : Request, res: Response) : Response {
    return res.send('delete user')
  }
}

export default new UserController()
