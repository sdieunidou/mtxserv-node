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

test('Call sendCommand() returns null & status 201', () => {
  let req = mTxClient.Game.sendCommand(process.env.SERVER_ID, 'help')
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call getGameList() returns object & status 200', () => {
  let req = mTxClient.Game.getGameList(process.env.SERVER_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call getGameServersList() returns object & status 200', () => {
  let req = mTxClient.Game.getGameServersList(process.env.S_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call getGameServerById() returns object & status 200', () => {
  let req = mTxClient.Game.getGameServerById(process.env.S_INVOICE_ID, process.env.SERVER_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})