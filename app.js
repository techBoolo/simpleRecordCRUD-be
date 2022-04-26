import express from 'express'
import cors from 'cors'
import recordRoute from './routes/record.js'

import { connectDB } from './config/mongo.js'
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/records', recordRoute)

app.use((req, res, next) => {
  res.status(200).json({ message: 'it works'})
})

app.use((error, req, res, next) => {
  res.status(req.statuCode || 500).json({
    message: error.message
  })
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}).catch(console.error)

export default app
