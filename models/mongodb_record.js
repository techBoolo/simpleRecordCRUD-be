import { ObjectId } from 'mongodb'
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

export const getRecord = async (id) => {
  const Record = getDB().collection('records')
  try {
    const record = await Record.findOne({ _id: ObjectId(id)})   
    return record
  } catch (error) {
    throw error
  }
}

export const updateRecord = async (id, data) => {
  const Record = getDB().collection('records')
  try {
    const result = await Record.updateOne({ _id: ObjectId(id)}, { $set: data})   
    return result
  } catch (error) {
    throw error
  }
}

export const deleteRecord = async (id) => {
  const Record = getDB().collection('records')
  try {
    const result = await Record.deleteOne({ _id: ObjectId(id)})   
    return result
  } catch (error) {
    throw error
  }
}
