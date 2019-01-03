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

test('Call getName() returns string & status 200', () => {
  let req = mTxClient.Voice.getName(process.env.T_INVOICE_ID)
  expect(typeof req.body).toBe('string')
  expect(req.statusCode).toBe(200)
})

test('Call changeName() returns null & status 200', () => {
  let req = mTxClient.Voice.changeName(process.env.M_INVOICE_ID, 'VoiceServer')
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})