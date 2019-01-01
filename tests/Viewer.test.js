/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxServClient = require('../src/')

let Client = mTxServClient.initialize({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  apiToken: process.env.API_KEY
})

/**
 * Viewer.getGameServerData()
 */
test('Calling /viewers/game in GET with params returns object', () => {
  expect(typeof Client.Viewer.getGameServerData(process.env.SERVER_TYPE, process.env.SERVER_IP, process.env.SERVER_PORT)).toBe('object')
})

/**
 * Viewer.getMumbleServerData()
 */
test('Calling /viewers/mumble in GET with params returns object', () => {
  expect(typeof Client.Viewer.getMumbleServerData(process.env.MUMBLE_IP, process.env.MUMBLE_PORT)).toBe('object')
})