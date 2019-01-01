/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxServClient = require('../src')

let Client = mTxServClient.initialize({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  apiToken: process.env.API_KEY
})

/**
 * Game.sendCommand()
 */
test('Calling /game/${gsId}/command in POST with params returns string', () => {
  expect(typeof Client.Game.sendCommand(process.env.SERVER_ID, 'help')).toBe('string')
})

/**
 * Game.getGameList()
 */
test('Calling /game/${gsId}/games in GET returns array', () => {
  expect(Array.isArray(Client.Game.getGameList(process.env.SERVER_ID))).toBe(true)
})

/**
 * Game.getGameServersList()
 */
test('Calling /game/${id}/servers in GET returns array', () => {
  expect(Array.isArray(Client.Game.getGameServersList(process.env.SERVER_INVOICE_ID))).toBe(true)
})

/**
 * Game.getGameServerById()
 */
test('Calling /game/${iId}/servers/${gsId} in GET returns object', () => {
  expect(typeof Client.Game.getGameServerById(process.env.SERVER_INVOICE_ID, process.env.SERVER_ID)).toBe('object')
})