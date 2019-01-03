/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxServClient = require('../src/')

test('Throws Error when initializing mTxServClient without parameters', () => {
  expect(() => {
    mTxServClient.initialize()
  }).toThrow('Empty / Invalid arguments passed to constructor')
})

test('Throws Error when initializing mTxServClient with wrong parameters', () => {
  expect(() => {
    mTxServClient.initialize({
      clientId: 'thats wrong',
      clientSecret: 'thats wrong as well',
      apiToken: 'no comment lol'
    })
  }).toThrow('Client credentials are invalid')
})

test('Returns instance of mTxServClient when initializing with the good parameters', () => {
  expect(
    mTxServClient.initialize({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      apiToken: process.env.API_KEY
    })).toBeInstanceOf(mTxServClient)
})