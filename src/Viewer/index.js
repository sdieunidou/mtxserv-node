/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Viewer {

  /**
   * Builds the Viewer API module
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
   * Returns data about specified game server
   * @param {string} type Server's type (example: 'minecraft')
   * @param {string} ip Server's IP
   * @param {number} port Server's PORT
   * @returns {object} Server's data
   */
  getGameServerData(type, ip, port)  {
    return this.exec({
      method: 'GET',
      uri: `/viewers/game?type=${type}&ip=${ip}&port=${port}`,
      paramAtEnd: true,
      params: {}
    })
  }

  /**
   * Returns data about specified Mumble server
   * @param {string} ip Server's IP
   * @param {number} port Server's PORT
   * @returns {object} Server's data
   */
  getMumbleServerData(ip, port)  {
    return this.exec({
      method: 'GET',
      uri: `/viewers/mumble?ip=${ip}&port=${port}`,
      paramAtEnd: true,
      params: {}
    })
  }

  /**
   * Returns data about specified Teamspeak server
   * @param {string} ip Server's IP
   * @param {number} port Server's PORT
   * @see README#Notes
   */
  getTeamspeakServerData(ip, port)  {
    return this.exec({
      method: 'GET',
      uri: `/viewers/teamspeak?ip=${ip}&port=${port}`,
      paramAtEnd: true,
      params: {}
    })
  }

}