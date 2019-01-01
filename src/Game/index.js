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
   * Send a command to specified server
   * @param {number} id Server's ID
   * @param {string} cmd Command to send
   * @see README#Notes
   */
  sendCommand(id, cmd)  {
    return this.exec({
      method: 'POST',
      uri: `/game/${id}/command`,
      paramAtEnd: false,
      params: {
        command: cmd
      }
    })
  }

  /**
   * Returns a list of available games for this server
   * @param {number} id Server's ID
   * @see README#Notes
   */
  getGameList(id)  {
    return this.exec({
      method: 'GET',
      uri: `/game/${id}/games`,
      paramAtEnd: false,
      params: {}
    })
  }

  /**
   * Gets a list of this client servers
   * @param {number} id Client's ID
   * @see README#Notes
   */
  getGameServersList(id) {
    return this.exec({
      method: 'GET',
      uri: `/game/${id}/servers`,
      paramAtEnd: false,
      params: {}
    })
  }

  /**
   * Gets data about specified server from specified client
   * @param {string} cId Client's ID
   * @param {number} id Server's ID
   * @see README#Notes
   */
  getGameServerById(cId, id) {
    return this.exec({
      method: 'GET',
      uri: `/game/${id}/servers/${cId}`,
      paramAtEnd: false,
      params: {}
    })
  }

}