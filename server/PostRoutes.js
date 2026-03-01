import express from 'express'
import {mp, mg, md, me} from './PostControllers.js'
import {Jwtcheck} from './middlefuncs.js'

const router = express.Router()

router.post('/', Jwtcheck, mp)
router.get('/', Jwtcheck, mg)
router.delete('/:id', Jwtcheck, md)
router.put('/:id', Jwtcheck, me)

export default router