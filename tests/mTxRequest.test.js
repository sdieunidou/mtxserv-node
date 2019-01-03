/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxRequest = require('../src/mTxRequest')
const mTxResponse = require('../src/mTxResponse')

test('Throws Error when initializing mTxRequest without accessToken', () => {
  expect(() => {
    new mTxRequest()
  }).toThrow('Cannot initialize mTxRequest without accessToken')
})

test('Returns instance of mTxRequest when initializing with accessToken', () => {
  expect( new mTxRequest('thisIsAnAccessToken') ).toBeInstanceOf(mTxRequest)
})

test('Throw Error when calling request() with wrong params', () => {
  expect(() => {
    let mTxReq = new mTxRequest('thisIsAnAccessToken')
    mTxReq.request([123])
  }).toThrow('Empty / Invalid arguments passed to request')
})

test('Throw Error when calling request() without params', () => {
  expect(() => {
    let mTxReq = new mTxRequest('thisIsAnAccessToken')
    mTxReq.request()
  }).toThrow('Empty / Invalid arguments passed to request')
})

test('Throw Error when calling request() without required params', () => {
  expect(() => {
    let mTxReq = new mTxRequest('thisIsAnAccessToken')
    mTxReq.request({})
  }).toThrow('Basic request informations are empty / wrong')
})

test('Returns instance of mTxResponse when calling request() with params', () => {
  let mTxReq = new mTxRequest('thisIsAnAccessToken')
  expect( mTxReq.request({
    method: 'GET',
    uri: `/uri`,
    statusCodes: [200]
  }) ).toBeInstanceOf(mTxResponse)
})