/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Actions {

  /**
   * Builds the Game Actions API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Reinstalls the specified GameServer
   * @method POST
   * @param {number} gsId GameServer's ID
   * @returns {null}
   */
  reinstall(gsId)  {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/actions/reinstall`,
      statusCodes: [201, 403]
    })
  }

  /**
   * Restarts specified GameServer
   * @param {number} gsId GameServer's ID
   * @method POST
   * @returns {null}
   */
  restart(gsId)  {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/actions/restart`,
      statusCodes: [201]
    })
  }

  /**
   * Forces specified GameServer to restart
   * @param {number} gsId GameServer's ID
   * @method POST
   * @returns {null}
   */
  forceRestart(gsId)  {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/actions/restart_force`,
      statusCodes: [201, 403]
    })
  }

  /**
   * Starts specified GameServer
   * @param {number} gsId GameServer's ID
   * @method POST
   * @returns {null}
   */
  start(gsId)  {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/actions/start`,
      statusCodes: [201]
    })
  }

  /**
   * Stops specified GameServer
   * @param {number} gsId GameServer's ID
   * @method POST
   * @returns {null}
   */
  stop(gsId)  {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/actions/stop`,
      statusCodes: [201]
    })
  }

  /**
   * Updates specified GameServer
   * @param {number} gsId GameServer's ID
   * @method POST
   * @returns {null}
   */
  update(gsId)  {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/actions/update`,
      statusCodes: [201, 403]
    })
  }

}