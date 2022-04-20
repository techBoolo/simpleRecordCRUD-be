import * as Record from '../models/record.js'
const newRecordFilter = ['name', 'email', 'age', 'gender']

export const index = async (req, res, next) => {
  try {
    const records = await Record.getRecords()
    res.status(200).json(records)
  } catch (error) {
    throw error
  }
}

export const create = async (req, res, next) => {
  const recordData = JSON.parse(JSON.stringify(req.body, newRecordFilter))
  try {
    const result = await Record.createRecord(recordData)    
    res.status(201).json(result)
  } catch (error) {
    throw error
  }
}
