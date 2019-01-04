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

test('Call getDomain() returns object & status 200', () => {
  let req = mTxClient.Hosting.Domain.getDomain(process.env.W_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call addCustomDomain() returns object & status 201', () => {
  let req = mTxClient.Hosting.Domain.addCustomDomain(process.env.W_INVOICE_ID, process.env.W_TOLINK)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(201)
})

test('Call removeCustomDomain() returns object & status 201', () => {
  let req = mTxClient.Hosting.Domain.removeCustomDomain(process.env.W_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(201)
})