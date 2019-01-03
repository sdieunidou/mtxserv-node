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
  let req = mTxClient.Voice.Actions.reinstall(process.env.M_INVOICE_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call restart() returns null & status 201', () => {
  let req = mTxClient.Voice.Actions.restart(process.env.M_INVOICE_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call start() returns null & status 201', () => {
  let req = mTxClient.Voice.Actions.start(process.env.M_INVOICE_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call stop() returns null & status 201', () => {
  let req = mTxClient.Voice.Actions.stop(process.env.M_INVOICE_ID)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})