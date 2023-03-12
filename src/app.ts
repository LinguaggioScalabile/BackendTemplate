import express from 'express'
import dotenv from 'dotenv'
import { hello, helloPost } from './controllers/basiccontroller'
import bodyParser from 'body-parser'

dotenv.config()
const app = express()
const port = process.env.PORT
const router = express.Router()

// Configurazione body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.get('/', hello)

router.post('/new', helloPost)

app.use(router)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})
