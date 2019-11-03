import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

import ConfigDatabase from './config/database'
import routes from './routes/routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares ():void{
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan('tiny'))
    dotenv.config()
  }

  private database () : void {
    ConfigDatabase.connect()
  }

  private routes () : void {
    this.express.use(routes)
  }
}

export default new App().express
