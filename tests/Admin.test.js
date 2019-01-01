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

/**
 * Admin.getAdminList()
 */
test('Calling /admins/{id} in GET returns array', () => {
  expect(Array.isArray(Client.Admin.getAdminList(process.env.SERVER_INVOICE_ID))).toBe(true)
})

/**
 * Admin.addAdmin()
 */
test('Calling /admins/${iId} in POST with params returns object', () => {
  expect(typeof Client.Admin.addAdmin(process.env.SERVER_INVOICE_ID, process.env.NEWADMIN_EMAIL)).toBe('string')
})

/**
 * Admin.getAdmin()
 */
test('Calling /admins/${iId}/${uId} in GET returns object', () => {
  Client.Admin.getAdminList(process.env.SERVER_INVOICE_ID).forEach(admin => {
    expect(typeof Client.Admin.getAdmin(process.env.SERVER_INVOICE_ID, admin.id)).toBe('object')
  })
})

/**
 * Admin.editAdmin()
 */
test('Calling /admins/${iId}/${uId} in PUT returns object', () => {
  Client.Admin.getAdminList(process.env.SERVER_INVOICE_ID).forEach(admin => {
    expect(typeof Client.Admin.editAdmin(process.env.SERVER_INVOICE_ID, admin.id, ["GRANTING_ACTIONS"])).toBe('object')
  })
})

/**
 * Admin.removeAdmin()
 */
test('Calling /admins/${iId}/${uId} in DELETE returns array', () => {
  Client.Admin.getAdminList(process.env.SERVER_INVOICE_ID).forEach(admin => {
    expect(typeof Client.Admin.removeAdmin(process.env.SERVER_INVOICE_ID, admin.id)).toBe('string')
  })
})

