/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Viewer {

  /**
   * Builds the Viewer API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }
  
  /**
   * Returns data about specified game server
   * @param {string} type Server's type (example: 'minecraft')
   * @param {string} ip Server's IP
   * @param {number} port Server's PORT
   * @method GET
   * @returns {object} Server's data
   */
  getGameServerData(type, ip, port)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/viewers/game?type=${type}&ip=${ip}&port=${port}`,
      statusCodes: [200]
    })
  }

  /**
   * Returns data about specified Mumble server
   * @param {string} ip Mumble's IP
   * @param {number} port Mumble's PORT
   * @method GET
   * @returns {object} Mumble's data
   */
  getMumbleServerData(ip, port)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/viewers/mumble?ip=${ip}&port=${port}`,
      statusCodes: [200]
    })
  }

  /**
   * Returns data about specified Teamspeak server
   * @param {string} ip TeamSpeak's IP
   * @param {number} port TeamSpeak's PORT
   * @method GET
   * @returns {object} TeamSpeak's data
   */
  getTeamspeakServerData(ip, port)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/viewers/teamspeak?ip=${ip}&port=${port}`,
      statusCodes: [200]
    })
  }

}