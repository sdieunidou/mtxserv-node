/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

const mTxServClient = require('../src/')
let Client = mTxServClient.initialize({
  clientId: 'YOUR-CLIENT-ID',
  clientSecret: 'YOUR-CLIENT-SECRET',
  apiToken: 'YOUR-API-KEY'
})

test('Calling /password/random in GET returns string', () => {
  expect(typeof Client.Password.generateRandomPassword()).toBe('string')
})