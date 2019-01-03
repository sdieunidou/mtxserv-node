/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxClient = require('../src/index').initialize({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  apiToken: process.env.API_KEY
})

test('Call getGameServerData() returns object & status 200', () => {
  let req = mTxClient.Viewer.getGameServerData(process.env.SERVER_TYPE, process.env.SERVER_IP, process.env.SERVER_PORT)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call getMumbleServerData() returns object & status 200', () => {
  let req = mTxClient.Viewer.getMumbleServerData(process.env.MUMBLE_IP, process.env.MUMBLE_PORT)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call getTeamspeakServerData() returns object & status 200', () => {
  let req = mTxClient.Viewer.getTeamspeakServerData(process.env.TEAMSPEAK_IP, process.env.TEAMSPEAK_PORT)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})