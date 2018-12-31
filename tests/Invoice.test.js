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
  apiToken: 'YOUR-API-TOKEN'
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
