/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Actions {

  /**
   * Builds the Voice Actions API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Reinstalls the VoiceServer
   * @param {number} iId Invoice's ID
   * @method POST
   * @returns {null}
   */
  reinstall(iId) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/voices/${iId}/actions/reinstall`,
      statusCodes: [201, 403]
    })
  }

  /**
   * Restarts the VoiceServer
   * @param {number} iId Invoice's ID
   * @method POST
   * @returns {null}
   */
  restart(iId) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/voices/${iId}/actions/restart`,
      statusCodes: [201]
    })
  }

  /**
   * Starts the VoiceServer
   * @param {number} iId Invoice's ID
   * @method POST
   * @returns {null}
   */
  start(iId) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/voices/${iId}/actions/start`,
      statusCodes: [201]
    })
  }

  /**
   * Stops the VoiceServer
   * @param {number} iId Invoice's ID
   * @method POST
   * @returns {null}
   */
  stop(iId) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/voices/${iId}/actions/stop`,
      statusCodes: [201]
    })
  }

}