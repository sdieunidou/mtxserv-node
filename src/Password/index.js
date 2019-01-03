/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Password {

  /**
   * Builds the Password API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Returns a random generated password with desired length (Default = 8)
   * @param {number} length Desired password length
   * @method GET
   * @returns {string} Generated password
   */
  generateRandomPassword(length = 8)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/password/random?length=${length}`,
      statusCodes: [200]
    })
  }

}