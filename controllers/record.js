import * as Record from '../models/record_dao.js'
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

export const show = async (req, res, next) => {
  const { id } = req.params
  try {
    const record = await Record.getRecord(id)
    res.status(200).json(record)
  } catch (error) {
    throw error
  } 
}

export const update = async (req, res, next) => {
  const { id } = req.params
  const updateData = req.body
  try {
    const result = await Record.updateRecord(id, updateData) 
    res.status(200).json(result)
  } catch (error) {
    throw error
  }
}
