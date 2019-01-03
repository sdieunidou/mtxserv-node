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

test('Call getLogs() returns object & status 200', () => {
  let req = mTxClient.Voice.Mumble.getLogs(process.env.M_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call changePassword() returns null & status 201', () => {
  let req = mTxClient.Voice.Mumble.changePassword(process.env.M_INVOICE_ID, 'password')
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call getPassword() returns string & status 200', () => {
  let req = mTxClient.Voice.Mumble.getPassword(process.env.M_INVOICE_ID)
  expect(typeof req.body).toBe('string')
  expect(req.statusCode).toBe(200)
})

test('Call changeSuperUserPassword() returns null & status 201', () => {
  let req = mTxClient.Voice.Mumble.changeSuperUserPassword(process.env.M_INVOICE_ID, 'password')
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call getWelcomeMessage() returns string & status 200', () => {
  let req = mTxClient.Voice.Mumble.getWelcomeMessage(process.env.M_INVOICE_ID)
  expect(typeof req.body).toBe('string')
  expect(req.statusCode).toBe(200)
})

test('Call changeWelcomeMessage() returns null & status 201', () => {
  let req = mTxClient.Voice.Mumble.changeWelcomeMessage(process.env.M_INVOICE_ID, 'Welcome !')
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})