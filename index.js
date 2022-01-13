import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.send('Work')
})

app.listen(port, () => {
    console.log('Hearing in port ' + port)
})