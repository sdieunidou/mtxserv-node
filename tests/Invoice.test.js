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

test('Calling /invoices in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoicesList()).toBe('object')
})

test('Calling /invoices/{id} in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoice(153087)).toBe('object')
})

test('Calling /invoices/{id}/logs in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoiceLogs(153087)).toBe('object')
})

test('Calling /invoices/{id}/offers/game in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoiceOffersList(153087)).toBe('object')
})

test('Calling /invoices/{id}/offers/next-allowed in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoiceNextOfferDate(153087)).toBe('object')
})
