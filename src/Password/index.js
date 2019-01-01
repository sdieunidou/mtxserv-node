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
  constructor(accessToken, baseUrl, request, exec) {
    this.accessToken = accessToken
    this.baseUrl = baseUrl
    this.req = request
    this.exec = exec
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
      paramAtEnd: true,
      params: {}
    })
  }

}