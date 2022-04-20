import express from 'express'
import * as recordController from '../controllers/record.js'

const router = express.Router()

router.get('/', recordController.index)
router.post('/', recordController.create)

export default router
