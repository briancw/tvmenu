const path = require('path')
const express = require('express')
const app = express()
const frontendPort = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', express.static(path.resolve(__dirname, '../', 'public')))
// app.use('/dist/', express.static(path.resolve(__dirname, '../', 'dist')))

app.use('/', express.static(path.resolve(__dirname, '../', 'dist', 'index.html')))

app.listen(frontendPort, (err) => {
    if (err) {
        throw err
    }
    console.log(`Listening on port ${frontendPort}`)
})
