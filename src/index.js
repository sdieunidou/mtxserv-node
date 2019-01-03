/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

// mTx Classes
const mTxRequest = require('./mTxRequest')

// Packages / Modules
const request = require('sync-request')

// Config
const defaultConfig = require('../config/defaultConfig')

module.exports = class mTxServClient {

  constructor(parsed) {
    this.accessToken = parsed.access_token
    this.expiresIn = parsed.expires_in
    this.refreshToken = parsed.refresh_token
    this.mTxRequest = new mTxRequest(this.accessToken)
    this.Invoice = new ( require('./Invoice') )( this.mTxRequest )
    this.Voice = new ( require('./Voice') )( this.mTxRequest )
    this.Password = new ( require('./Password') )( this.mTxRequest )
    this.Viewer = new ( require('./Viewer') )( this.mTxRequest )
    this.Admin = new ( require('./Admin') )( this.mTxRequest )
    this.Game = new ( require('./Game') )( this.mTxRequest )
  }

  /**
   * Initializes the client with user config
   * @param {object} userConfig User configuration (ID, SECRET, API TOKEN)
   */
  static initialize(userConfig) {
    // Testing user input
    if (typeof userConfig !== 'object' || Array.isArray(userConfig)) {
      throw new Error('Empty / Invalid arguments passed to constructor')
    }
    // Processing user params
    let clientId = userConfig.clientId
    let clientSecret = userConfig.clientSecret
    let apiToken = userConfig.apiToken
    // Generating request params
    let params = {
      grant_type: defaultConfig.grantType,
      client_id: clientId,
      client_secret: clientSecret,
      api_token: apiToken
    }
    // Generating complete URL because params are parsed and modified and it doesn't work
    let generatedUrl = 
      defaultConfig.OAuthUrl +
      `?grant_type=${params.grant_type}` +
      `&client_id=${params.client_id}` +
      `&client_secret=${params.client_secret}` +
      `&api_key=${params.api_token}`
    // Requesting access token
    let res = request('GET', generatedUrl)
    if (res.statusCode != 200) {
      throw new Error('Client credentials are invalid')
    }
    return new this(JSON.parse(res.getBody()))
  }

}