/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

/**
 * mTx Classes
 */
const mTxResponse = require('./mTxResponse')

/**
 * Packages / Modules
 */
const url = require('url')
const syncReq = require('sync-request')

/**
 * Config
 */
const dConfig = require('../config/defaultConfig')

module.exports = class mTxRequest {

  constructor(accessToken) {
    if (typeof accessToken == 'undefined') {
      throw new Error('Cannot initialize mTxRequest without accessToken')
    }
    this.accessToken = accessToken
  }
  
  request(req) {
    // Conformity checks
    if (typeof req !== 'object' || Array.isArray(req)) {
      throw new Error('Empty / Invalid arguments passed to request')
    }
    if (typeof req.method == 'undefined' || typeof req.uri == 'undefined' || typeof req.statusCodes == 'undefined') {
      throw new Error('Basic request informations are empty / wrong')
    }

    // Composes base URL + provided URI + access token (And remove forwards slash)
    let composedUri = dConfig.baseUrl + req.uri.substr(1)
    let composedUrl = composedUri
    composedUrl += url.parse(composedUrl, true).search === null ? '?' : '&'
    composedUrl += `access_token=${this.accessToken}`

    // Makes the request to API
    let resp = typeof req.json == 'undefined' ? syncReq(req.method, composedUrl) : syncReq(req.method, composedUrl, { json: req.json })
    
    // Parses the response according to status code
    let body = req.statusCodes.indexOf(resp.statusCode) == -1 ? resp.body : JSON.parse(resp.body.toString('utf8'))

    // Returns a response object
    return new mTxResponse({
      uri: composedUri,
      statusCode: resp.statusCode,
      body: body
    })
    
  }

}