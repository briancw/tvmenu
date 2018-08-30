const {app, BrowserWindow} = require('electron')
let win

const path = require('path')
const express = require('express')
const serverApp = express()
const bodyParser = require('body-parser')
const port = 3000

serverApp.use(bodyParser.json())
serverApp.use(bodyParser.urlencoded({extended: true}))

serverApp.use('/', express.static(path.resolve(__dirname, 'public')))
// serverApp.use('/dist/', express.static(path.resolve(__dirname, '../', 'dist')))

serverApp.use('/', express.static(path.resolve(__dirname, 'dist', 'index.html')))

serverApp.listen(port, (err) => {
    if (err) {
        throw err
    }
    console.log(`Listening on port ${port}`)
})

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    // win.loadFile('./public/index.html')
    // win.loadURL('http://localhost:3000')
    win.loadURL('http://localhost:3000/')
}

app.on('ready', createWindow)
