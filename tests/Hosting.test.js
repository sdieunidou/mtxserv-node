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

test('Call getUsedDiskSpace() returns string & status 200', () => {
  let req = mTxClient.Hosting.getUsedDiskSpace(process.env.W_INVOICE_ID)
  expect(typeof req.body).toBe('string')
  expect(req.statusCode).toBe(200)
})

test('Call changeFtpPassword() returns status 201', () => {
  let req = mTxClient.Hosting.changeFtpPassword(process.env.W_INVOICE_ID, 'password')
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call changeSqlPassword() returns status 201', () => {
  let req = mTxClient.Hosting.changeSqlPassword(process.env.W_INVOICE_ID, 'password')
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})