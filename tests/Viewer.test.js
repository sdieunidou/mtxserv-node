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

test('Calling /viewers/game with params in GET returns object', () => {
  expect(typeof Client.Viewer.getGameServerData('minecraft', 'game-fr-23.mtxserv.com', 27420)).toBe('object')
})

test('Calling /viewers/mumble with params in GET returns object', () => {
  expect(typeof Client.Viewer.getMumbleServerData('mumble1.mtxserv.fr', 51562)).toBe('object')
})