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

test('Call resources() returns object & status 200', () => {
  let req = mTxClient.Game.Infos.resources(process.env.SERVER_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call state() returns object & status 200', () => {
  let req = mTxClient.Game.Infos.state(process.env.SERVER_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})
