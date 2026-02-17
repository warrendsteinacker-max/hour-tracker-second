import express from 'express'
import cors from 'cors'
import connectDB from './connectDB.js'
import router from "./Routes.js"


connectDB()

const app = express()

app.use(cors({origin: '*'}))

app.use('/gtoB', router)

app.listen(3001, () => {
    console.log('server good')
})




