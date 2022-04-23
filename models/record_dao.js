import * as Record from './mongodb_record.js'

export const createRecord = async (data) => {
  try {
    return await Record.createRecord(data)    
  } catch (error) {
    throw error
  }
}

export const getRecords = async () => {
  try {
    return await Record.getRecords()    
  } catch (error) {
    throw error
  }
}

export const getRecord = async (id) => {
  try {
    return await Record.getRecord(id) 
  } catch (error) {
    throw error
  }
}

export const updateRecord = async (id, data) => {
  try {
    return await Record.updateRecord(id, data) 
  } catch (error) {
    throw error
  }
}

export const deleteRecord = async (id) => {
  try {
    return await Record.deleteRecord(id) 
  } catch (error) {
    throw error
  }
}
