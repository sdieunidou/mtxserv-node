/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Mumble {

  /**
   * Builds the Voice Mumble API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Returns Mumble's Logs
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Mumble's logs
   */
  getLogs(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/voices/${iId}/config/mumble/log`,
      statusCodes: [200]
    })
  }

  /**
   * Returns Mumble's Password
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {string} Mumble's password
   */
  getPassword(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/voices/${iId}/config/mumble/password`,
      statusCodes: [200]
    })
  }

  /**
   * Changes Mumble's Password
   * @param {number} iId Invoice's ID
   * @param {string} password New password
   * @method PUT
   * @returns {string} Mumble's Password
   */
  changePassword(iId, password) {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/voices/${iId}/config/mumble/password`,
      json: {
        password: password
      },
      statusCodes: [201, 400]
    })
  }

  /**
   * Changes Mumble's SuperUser's Password
   * @param {number} iId Invoice's ID
   * @param {string} password New password
   * @method PUT
   * @returns {null}
   */
  changeSuperUserPassword(iId, password) {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/voices/${iId}/config/mumble/password_admin`,
      json: {
        password: password
      },
      statusCodes: [201, 400]
    })
  }

  /**
   * Returns Mumble's Welcome Message
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {string} Mumble's Welcome Message
   */
  getWelcomeMessage(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/voices/${iId}/config/mumble/welcome`,
      statusCodes: [200]
    })
  }

   /**
   * Changes Mumble's Welcome Message
   * @param {number} iId Invoice's ID
   * @param {string} message Mumble's New Welcome Message
   * @method PUT
   * @returns {null}
   */
  changeWelcomeMessage(iId, message) {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/voices/${iId}/config/mumble/welcome`,
      json: {
        message: message
      },
      statusCodes: [201, 400]
    })
  }

}