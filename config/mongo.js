import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.MONGODB_URI
const dbName = process.env.DB_NAME

let db
const mongoClient = new MongoClient(url)
export const connectDB = async () => {
  try {
    if(db) return db
    await mongoClient.connect()
    db = mongoClient.db(dbName)
    console.log('connected to mongodb')
    process.on('exit', () => {
      if(mongoClient) {
        mongoClient.close()
      }
    })
  } catch (error) {
    throw error
  }
}

export const getDB = () => {
  return db
}
