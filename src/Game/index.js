/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Game {

  /**
   * Builds the Game API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
    this.Actions = new ( require('./Actions') )( this.mTxRequest )
    this.Infos = new ( require('./Infos') )( this.mTxRequest )
    this.Backup = new ( require('./Backup') )( this.mTxRequest )
    this.FTP = new ( require('./FTP') )( this.mTxRequest )
  }

  /**
   * Send a command to specified gameserver
   * @param {number} gsId GameServer's ID
   * @param {string} cmd Command to send
   * @method POST
   */
  sendCommand(gsId, cmd)  {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/command`,
      json: {command: cmd},
      statusCodes: [201, 400]
    })
  }

  /**
   * Returns a list of available games for this server
   * @param {number} gsId Server's ID
   * @method GET
   * @returns {array} List of available games
   */
  getGameList(gsId)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/game/${gsId}/games`,
      statusCodes: [201]
    })
  }

  /**
   * Gets a list of this invoice servers
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {array} List of this invoice servers
   */
  getGameServersList(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/game/${iId}/servers`,
      statusCodes: [200]
    })
  }

  /**
   * Gets data about specified server from specified invoice
   * @param {number} iId Invoice's ID
   * @param {string} gsId GameServer's ID
   * @method GET
   * @returns {object} Data about the GameServer
   */
  getGameServerById(iId, gsId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/game/${iId}/servers/${gsId}`,
      statusCodes: [200]
    })
  }

}