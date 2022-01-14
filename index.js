import express from 'express'

const app = express()
const port = process.env.PORT || 3000

import mainRouter from './routes/mainRouter.js'

app.use(express.json())

app.use('/api/v1', mainRouter)

app.listen(port, () => {
    console.log('Hearing in port ' + port)
})