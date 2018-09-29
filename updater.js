const fs = require('fs')
const axios = require('axios')
const exec = require('child_process').exec

// Make a blank text file if one doesn't exist yet to prevent errors on subsequent attempted reads
if (!fs.existsSync('./last-update.txt')) {
    fs.writeFileSync('./last-update.txt', '')
    console.log('Creating new last-update.txt\n\n')
}

// Get the time of the last software update from a text file
const lastUpdate = fs.readFileSync('./last-update.txt', 'utf8')

// Poll the software respository for the time of the latest update
async function checkForUpdates() {
    let response = await axios.get('https://api.github.com/repos/briancw/tvmenu')

    let {data: {updated_at}} = response

    console.log(`Checking for updates. ${new Date}`)
    console.log(`Current version: ${updated_at}`)
    console.log(`Last known version: ${lastUpdate}\n`)

    if (updated_at) {
        if (updated_at !== lastUpdate) {
            // If time of the latest change doesn't match the last known time, save it
            fs.writeFileSync('./last-update.txt', updated_at)
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

// Check for updates every 10 minutes
const updateCheckTime = 1000 * 60 * 5
setInterval(checkForUpdates, updateCheckTime)
