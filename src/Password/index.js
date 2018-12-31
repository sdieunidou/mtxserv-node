/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Password {

  /**
   * Builds the Password API module
   * @param {string} accessToken Generated access token
   * @param {string} baseUrl API base URL
   * @param {object} request sync-request Object
   */
  constructor(accessToken, baseUrl, request) {
    this.accessToken = accessToken
    this.baseUrl = baseUrl
    this.req = request
  }

  /**
   * Returns a random generated password with desired length (Default = 8)
   * @param {number} length Desired password length
   * @method GET
   * @returns {string} Generated password
   */
  generateRandomPassword(length = 8)  {
    return this.exec({
      method: 'GET',
      uri: `/password/random?length=${length}`,
      paramAtEnd: true
    })
  }

  /**
   * Execute the request with the provided parameters
   * @param {object} params Parameters to use for the API request
   * @returns {object} Parsed JSON from response
   */
  exec(params) {
    let uri =  params.paramAtEnd ? params.uri.substr(1) + '&' : params.uri.substr(1) + '?'
    let method = params.method
    return JSON.parse(this.req(method,
      `${this.baseUrl}${uri}access_token=${this.accessToken}`
    ).getBody('utf8'))
  }

}