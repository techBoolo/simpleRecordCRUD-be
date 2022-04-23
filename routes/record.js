import express from 'express'
import * as recordController from '../controllers/record.js'

const router = express.Router()

router.get('/', recordController.index)
router.post('/', recordController.create)
router.get('/:id', recordController.show)
router.patch('/:id', recordController.update)

export default router
