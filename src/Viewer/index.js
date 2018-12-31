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
  constructor(accessToken, baseUrl, request) {
    this.accessToken = accessToken
    this.baseUrl = baseUrl
    this.req = request
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
      paramAtEnd: true
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
      paramAtEnd: true
    })
  }

  /**
   * Returns data about specified Teamspeak server
   * @param {string} ip Server's IP
   * @param {number} port Server's PORT
   * @returns {object} Server's data
   * @todo TEST WITH REAL TEAMSPEAK SERVER
   */
  getTeamspeakServerData(ip, port)  {
    return this.exec({
      method: 'GET',
      uri: `/viewers/teamspeak?ip=${ip}&port=${port}`,
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