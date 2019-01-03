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

test('Call getGroups() returns object & status 200', () => {
  let req = mTxClient.Voice.TeamSpeak.getGroups(process.env.T_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call addToken() returns object & status 201', () => {
  let req = mTxClient.Voice.TeamSpeak.addToken(process.env.T_INVOICE_ID, 3524, 'Normal')
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(201)
})

test('Call getToken() returns object & status 200', () => {
  let req = mTxClient.Voice.TeamSpeak.getToken(process.env.T_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call removeToken() returns null & status 201', () => {
  let req = mTxClient.Voice.TeamSpeak.getToken(process.env.T_INVOICE_ID)
  req.body.forEach(group => {
    let delReq = mTxClient.Voice.TeamSpeak.removeToken(process.env.T_INVOICE_ID, group.token)
    expect(delReq.body).toBe(null)
    expect(delReq.statusCode).toBe(201)
  });
})