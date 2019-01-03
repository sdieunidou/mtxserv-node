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

test('Call getInvoicesList() returns object & status 200', () => {
  let req = mTxClient.Invoice.getInvoicesList()
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call getInvoice(iId) returns object & status 200', () => {
  let req = mTxClient.Invoice.getInvoice(process.env.S_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call getInvoiceLogs(iId) returns object & status 200', () => {
  let req = mTxClient.Invoice.getInvoice(process.env.S_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call changeInvoiceSlots(slots) returns status 201/400', () => {
  let req = mTxClient.Invoice.changeInvoiceSlots(process.env.T_INVOICE_ID, 80)
  expect(req.statusCode).toBe(400)
})

test('Call getInvoiceOffersList(iId) returns object & status 200', () => {
  let req = mTxClient.Invoice.getInvoiceOffersList(process.env.S_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call getInvoiceNextOfferDate(iId) returns object & status 200', () => {
  let req = mTxClient.Invoice.getInvoiceNextOfferDate(process.env.S_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})