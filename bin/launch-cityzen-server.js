#!/usr/bin/env node

require('dotenv').config()
const child_process = require('child_process')

console.log('starting cityzen server...')

let { CITYZEN_SERVER_AUTOLAUNCH_BRANCH, CITYZEN_SERVER_AUTOLAUNCH_URL } = process.env

CITYZEN_SERVER_AUTOLAUNCH_BRANCH = CITYZEN_SERVER_AUTOLAUNCH_BRANCH || 'master'
CITYZEN_SERVER_AUTOLAUNCH_URL = CITYZEN_SERVER_AUTOLAUNCH_URL || `git://github.com/codeforlansing/cityzen-server.git#${CITYZEN_SERVER_AUTOLAUNCH_BRANCH}`

child_process.spawn('npx', ['--ignore-existing=false', CITYZEN_SERVER_AUTOLAUNCH_URL], { stdio: 'inherit' })
