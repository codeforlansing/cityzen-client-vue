#!/usr/bin/env node

require('dotenv').config()
const ChildProcess = require('child_process')

const argv = process.argv.slice(process.argv.indexOf(__filename) + 1)

let { CITYZEN_SERVER_AUTOLAUNCH_BRANCH, CITYZEN_SERVER_AUTOLAUNCH_URL, CITYZEN_SERVER_USE_CACHED } = process.env

CITYZEN_SERVER_AUTOLAUNCH_BRANCH = CITYZEN_SERVER_AUTOLAUNCH_BRANCH || 'master'
CITYZEN_SERVER_AUTOLAUNCH_URL = CITYZEN_SERVER_AUTOLAUNCH_URL || `git://github.com/codeforlansing/cityzen-server.git#${CITYZEN_SERVER_AUTOLAUNCH_BRANCH}`
CITYZEN_SERVER_USE_CACHED = CITYZEN_SERVER_USE_CACHED !== 'false'

console.log('starting cityzen server...')
ChildProcess.spawn('npx', [`--ignore-existing=${!CITYZEN_SERVER_USE_CACHED}`, `--package=${CITYZEN_SERVER_AUTOLAUNCH_URL}`, 'cityzen-server'], { stdio: 'inherit' })
