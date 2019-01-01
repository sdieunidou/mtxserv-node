/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Game {

  /**
   * Builds the Game API module
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
   * Send a command to specified gameserver
   * @param {number} gsId GameServer's ID
   * @param {string} cmd Command to send
   * @method POST
   * @returns {string} Empty string
   */
  sendCommand(gsId, cmd)  {
    return this.exec({
      method: 'POST',
      uri: `/game/${gsId}/command`,
      paramAtEnd: false,
      params: {command: `${cmd}`}
    })
  }

  /**
   * Returns a list of available games for this server
   * @param {number} gsId Server's ID
   * @method GET
   * @returns {array} List of available games
   */
  getGameList(gsId)  {
    return this.exec({
      method: 'GET',
      uri: `/game/${gsId}/games`,
      paramAtEnd: false,
      params: {}
    })
  }

  /**
   * Gets a list of this invoice servers
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {array} List of this invoice servers
   */
  getGameServersList(iId) {
    return this.exec({
      method: 'GET',
      uri: `/game/${iId}/servers`,
      paramAtEnd: false,
      params: {}
    })
  }

  /**
   * Gets data about specified server from specified invoice
   * @param {number} iId Invoice's ID
   * @param {string} gsId GameServer's ID
   * @method GET
   * @returns {object} Data about the 
   */
  getGameServerById(iId, gsId) {
    return this.exec({
      method: 'GET',
      uri: `/game/${iId}/servers/${gsId}`,
      paramAtEnd: false,
      params: {}
    })
  }

}