/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

// Packages
const request = require('sync-request')

// Config
const defaultConfig = require('../config/defaultConfig')

module.exports = class mTxServClient {

  constructor(parsed) {
    this.accessToken = parsed.access_token
    this.expiresIn = parsed.expires_in
    this.refreshToken = parsed.refresh_token
    this.Invoice = new ( require('./Invoice') )(this.accessToken, defaultConfig.baseUrl, request, this.exec)
    this.Password = new ( require('./Password') )(this.accessToken, defaultConfig.baseUrl, request, this.exec)
    this.Viewer = new ( require('./Viewer') )(this.accessToken, defaultConfig.baseUrl, request, this.exec)
    this.Admin = new ( require('./Admin') )(this.accessToken, defaultConfig.baseUrl, request, this.exec)
    this.Game = new ( require('./Game') )(this.accessToken, defaultConfig.baseUrl, request, this.exec)
  }

  /**
   * Initializes the client with user config
   * @param {object} userConfig User configuration (ID, SECRET, API TOKEN)
   */
  static initialize(userConfig) {
      // Testing user input
      if (typeof userConfig !== 'object' || Array.isArray(userConfig)) {
        throw new Error('Empty / Invalid arguments passed to constructor.')
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
      let res = request('GET', generatedUrl).getBody()
      return new this(JSON.parse(res))
  }

  /**
   * Execute the request with the provided parameters
   * @param {object} params Parameters to use for the API request
   * @returns {object} Parsed JSON from response
   */
  exec(params) {
    let uri =  params.paramAtEnd ? params.uri.substr(1) + '&' : params.uri.substr(1) + '?'
    let method = params.method
    if (method == 'POST' || method == 'PUT') {
      return JSON.parse(this.req(method, `${this.baseUrl}${uri}access_token=${this.accessToken}`, { json: params.params }).body.toString('utf8'))
    } else {
      return JSON.parse(this.req(method, `${this.baseUrl}${uri}access_token=${this.accessToken}`).body.toString('utf8'))
    }
  }

}