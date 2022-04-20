import express from 'express'
import cors from 'cors'
import recordRoute from './routes/record.js'

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
export default app
