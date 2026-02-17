import express from 'express'
import {mp, mg} from './controllers.js'

const router = express.Router()

router.post('/', mp)
router.get('/', mg)
// router.delet()
// router.put()

export default router