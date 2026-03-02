import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './connectDB.js'
import arouter from './AuthRoutes.js'
import prouter from "../PostRoutes.js"


connectDB()

const app = express()

app.use(express.json())

app.use(cors({origin: '*'}))

app.use('/auth', arouter)

app.use('/gtoB', prouter)

app.listen(3001, () => {
    console.log('server good')
})




