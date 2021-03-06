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

test('Call generateRandomPassword() without params returns string & status 200', () => {
  let req = mTxClient.Password.generateRandomPassword()
  expect(typeof req.body).toBe('string')
  expect(req.statusCode).toBe(200)
})

test('Call generateRandomPassword() with params returns string & status 200', () => {
  let req = mTxClient.Password.generateRandomPassword(10)
  expect(typeof req.body).toBe('string')
  expect(req.statusCode).toBe(200)
})