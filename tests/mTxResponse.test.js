/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 * 
 * JEST TEST
 */

require('dotenv').config()

const mTxResponse = require('../src/mTxResponse')

test('Throws Error when initializing without params', () => {
  expect(() => {
    new mTxResponse()
  }).toThrow('Empty / Invalid arguments passed to request')
})

test('Throws Error when initializing with wrong params', () => {
  expect(() => {
    new mTxResponse({})
  }).toThrow('Basic response informations are empty / wrong')
})

test('Returns instance of mTxResponse when initializing with basic params', () => {
  expect( new mTxResponse({
    uri: '/uri',
    statusCode: 200,
    body: { uri: '/uri' }
  }) ).toBeInstanceOf(mTxResponse)
})