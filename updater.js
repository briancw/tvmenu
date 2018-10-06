const fs = require('fs')
const axios = require('axios')
const http2 = require('http2')
const exec = require('child_process').exec
const softwareVersionFile = 'last-update-software.txt'
const contentVersionFile = 'last-update-content.txt'
const contentFile = 'content.json'
const {userId} = require('./config.js')
const apiServer = 'https://local.whicheloe.us:3001'
// const apiServer = 'https://signage.whicheloe.us'

// Make a blank text file if one doesn't exist yet to prevent errors on subsequent attempted reads
if (!fs.existsSync(softwareVersionFile)) {
    fs.writeFileSync(softwareVersionFile, '')
}
if (!fs.existsSync(contentVersionFile)) {
    fs.writeFileSync(contentVersionFile, '')
}

// Get the time of the last software update from a text file
const lastUpdateSoftware = fs.readFileSync(softwareVersionFile, 'utf8')
const lastUpdateContent = fs.readFileSync(contentVersionFile, 'utf8')

// Poll the software respository for the time of the latest update
async function checkForSoftwareUpdate() {
    let response = await axios.get('https://api.github.com/repos/briancw/tvmenu')

    let {data: {updated_at}} = response

    console.log(`Checking for updates. ${new Date}`)
    console.log(`Current version: ${updated_at}`)
    console.log(`Last known version: ${lastUpdate}\n`)

    if (updated_at) {
        if (updated_at !== lastUpdateSoftware) {
            // If time of the latest change doesn't match the last known time, save it
            fs.writeFileSync(softwareVersionFile, updated_at)
            console.log(`Software updated\nLast update: ${updated_at}`)

            // Run deploy.sh, which pulls the latest code, re-install dependencies, re-builds the application, and restarts it
            exec('./deploy.sh', (error, stdout, stderr) => {
                if (error) {
                    console.error(error)
                }

                console.log(stdout)
            })
        }
    } else {
        console.error('Error getting last update time')
    }
}

async function checkForContentUpdate() {
    // let response = await axios.get(`${apiServer}/content`, {
    //     headers: {
    //         userId,
    //     }
    // })
    let session = http2.connect(`${apiServer}`)
    let request = session.request({
        ':path': '/content',
        userId,
    })

    request.on('response', (headers) => {
        let data = ''

        request.on('data', (chunk) => {
 data += chunk })
        .on('end', () => {
            console.log(data)
        })
    })

    // let {updateTime, content} = response

    // if (updateTime) {
    //     if (updateTime !== lastUpdateContent) {
    //         // If time of the latest change doesn't match the last known time, save it
    //         fs.writeFileSync(contentVersionFile, updateTime)
    //         console.log(`Content updated\nLast update: ${updateTime}`)

    //         fs.writeFileSync(contentFile, content)
    //     }
    // }
}

// Check for updates every 10 minutes
const softwareInterval = 1000 * 60 * 5
const contentInterval = 1000 * 60

setInterval(checkForSoftwareUpdate, softwareInterval)
// setInterval(checkForContentUpdate, contentInterval)

// checkForContentUpdate()
