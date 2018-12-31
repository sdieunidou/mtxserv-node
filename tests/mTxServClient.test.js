/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxServClient = require('../src/')

test('Calling new mTxServClient() without arguments throws error', () => {
  expect(() => {
    mTxServClient.initialize()
  }).toThrowError('Empty / Invalid arguments passed to constructor.')
})

test('Calling new mTxServClient() with wrong arguments throws error', () => {
  expect(() => {
    mTxServClient.initialize(['', '', ''])
  }).toThrowError('Empty / Invalid arguments passed to constructor.')
})

test('Calling new mTxServClient() with good arguments returns Client instance with defined credentials', () => {
  let Client = mTxServClient.initialize({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    apiToken: process.env.API_KEY
  })
  expect(Client).toBeInstanceOf(mTxServClient)
  expect(Client.accessToken).toBeDefined()
  expect(Client.expiresIn).toBeDefined()
  expect(Client.refreshToken).toBeDefined()
})