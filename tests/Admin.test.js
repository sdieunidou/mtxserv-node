/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxServClient = require('../src')

let Client = mTxServClient.initialize({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  apiToken: process.env.API_KEY
})

test('Calling /admins/{id} in GET returns array', () => {
  expect(Array.isArray(Client.Admin.getAdminList(process.env.SERVER_ID))).toBe(true)
})