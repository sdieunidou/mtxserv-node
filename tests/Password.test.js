/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxServClient = require('../src/')

let Client = mTxServClient.initialize({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  apiToken: process.env.API_KEY
})

/**
 * Password.generateRandomPassword()
 */
test('Calling /password/random in GET returns string', () => {
  expect(typeof Client.Password.generateRandomPassword()).toBe('string')
})

/**
 * Password.generateRandomPassword()
 */
test('Calling /password/random in GET with params returns string', () => {
  expect(typeof Client.Password.generateRandomPassword(10)).toBe('string')
})