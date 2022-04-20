import { getDB  } from '../config/mongo.js'

export const createRecord = async (data) => {
  const Record = getDB().collection('records')
  try {
    return await Record.insertOne(data)   
  } catch (error) {
    throw error
  }
}
export const getRecords = async () => {
  const Record = getDB().collection('records')
  try {
    const cursor = await Record.find()   
    return await cursor.toArray()
  } catch (error) {
    throw error
  }
}
