#!/bin/bash

# This script is automatically run by updater.js whenever it detects an update to the software repository
# It can also be run manually

git reset --hard
git pull
npm install
npm run pack-production

pm2 startOrRestart app.json
pm2 startOrRestart updater.json
