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
 * Invoice.getInvoicesList()
 */
test('Calling /invoices in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoicesList()).toBe('object')
})

/**
 * Invoice.getInvoice()
 */
test('Calling /invoices/{id} in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoice(process.env.SERVER_INVOICE_ID)).toBe('object')
})

/**
 * Invoice.getInvoiceLogs()
 */
test('Calling /invoices/{id}/logs in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoiceLogs(process.env.SERVER_INVOICE_ID)).toBe('object')
})

/**
 * Invoice.getInvoiceOffersList()
 */
test('Calling /invoices/{id}/offers/game in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoiceOffersList(process.env.SERVER_INVOICE_ID)).toBe('object')
})

/**
 * Invoice.getInvoiceNextOfferDate()
 */
test('Calling /invoices/{id}/offers/next-allowed in GET returns JSON', () => {
  expect(typeof Client.Invoice.getInvoiceNextOfferDate(process.env.SERVER_INVOICE_ID)).toBe('object')
})
