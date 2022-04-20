import http from 'http'
import app from './app.js'
import { connectDB } from './config/mongo.js'

const PORT = process.env.PORT || 3001

const server = http.createServer(app)


connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}).catch(console.error)
