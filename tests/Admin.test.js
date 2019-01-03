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

test('Call getAdminList() returns object & status 200', () => {
  let req = mTxClient.Admin.getAdminList(process.env.S_INVOICE_ID)
  expect(typeof req.body).toBe('object')
  expect(req.statusCode).toBe(200)
})

test('Call addAdmin() without grants returns null & status 201', () => {
  let req = mTxClient.Admin.addAdmin(process.env.S_INVOICE_ID, process.env.NEWADMIN_EMAIL)
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call removeAdmin() returns null & status 200', () => {
  let req = mTxClient.Admin.getAdminList(process.env.S_INVOICE_ID, process.env.NEWADMIN_EMAIL, ["GRANTING_ACTIONS"])
  req.body.forEach(admin => {
    let delReq = mTxClient.Admin.removeAdmin(process.env.S_INVOICE_ID, admin.id)
    expect(delReq.body).toBe(null)
    expect(delReq.statusCode).toBe(200)
  });
})

test('Call addAdmin() with grants returns null & status 201', () => {
  let req = mTxClient.Admin.addAdmin(process.env.S_INVOICE_ID, process.env.NEWADMIN_EMAIL, ["GRANTING_ACTIONS"])
  expect(req.body).toBe(null)
  expect(req.statusCode).toBe(201)
})

test('Call getAdmin() returns object & status 201', () => {
  let req = mTxClient.Admin.getAdminList(process.env.S_INVOICE_ID, process.env.NEWADMIN_EMAIL, ["GRANTING_ACTIONS"])
  req.body.forEach(admin => {
    let editReq = mTxClient.Admin.getAdmin(process.env.S_INVOICE_ID, admin.id)
    expect(typeof editReq.body).toBe('object')
    expect(editReq.statusCode).toBe(200)
  });
})

test('Call editAdmin() returns object & status 201', () => {
  let req = mTxClient.Admin.getAdminList(process.env.S_INVOICE_ID, process.env.NEWADMIN_EMAIL, ["GRANTING_ACTIONS"])
  req.body.forEach(admin => {
    let editReq = mTxClient.Admin.editAdmin(process.env.S_INVOICE_ID, admin.id, ["GRANTING_ACTIONS"])
    expect(typeof editReq.body).toBe('object')
    expect(editReq.statusCode).toBe(201)
  });
})

