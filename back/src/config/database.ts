import mongoose from 'mongoose'

class ConfigDatabase {
  static async connect () : Promise<void> {
    const dbUser = process.env.DB_USER
    const dbPass = process.env.DB_PASSWORD
    const dbDatabase = process.env.DB_DATABASE
    try {
      await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPass}@cluster0-ejedw.mongodb.net/${dbDatabase}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      console.log('database connected')
    } catch (error) {
      console.log(error)
    }
  }
}

export default ConfigDatabase
