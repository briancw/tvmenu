const path = require('path')
const express = require('express')
const app = express()
const frontendPort = 3000
const bodyParser = require('body-parser')
const fallback = require('express-history-api-fallback')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// If in development, load resources from HMR server
if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode!')

    const hmr = require('./hmr.js')(app)
} else {
    app.use('/', express.static(path.resolve(__dirname, '../', 'public')))
}

app.use(fallback('index.html', {root: path.resolve(__dirname, '../', 'public')}))


app.listen(frontendPort, (err) => {
    if (err) {
        throw err
    }
    console.log(`Listening on port ${frontendPort}`)
})
