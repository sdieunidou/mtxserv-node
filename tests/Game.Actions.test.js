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

test('Call reinstall() returns null & status 201', () => {
  let req = mTxClient.Game.Actions.reinstall(process.env.SERVER_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call restart() returns null & status 201', () => {
  let req = mTxClient.Game.Actions.restart(process.env.SERVER_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call forceRestart() returns null & status 201', () => {
  let req = mTxClient.Game.Actions.forceRestart(process.env.SERVER_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call start() returns null & status 201', () => {
  let req = mTxClient.Game.Actions.start(process.env.SERVER_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call stop() returns null & status 201', () => {
  let req = mTxClient.Game.Actions.stop(process.env.SERVER_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call update() returns null & status 201', () => {
  let req = mTxClient.Game.Actions.update(process.env.SERVER_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})
