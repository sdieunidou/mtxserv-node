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
   * Returns VoiceServer's Groups
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} VoiceServe's Groups
   */
  getGroups(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/voices/${iId}/teamspeak/group`,
      statusCodes: [200]
    })
  }

  /**
   * Returns TeamSpeak's Groups with token
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {string} List of TeamSpeak's groups having tokens
   */
  getToken(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/voices/${iId}/teamspeak/token`,
      statusCodes: [200]
    })
  }

  /**
   * Adds a token to TeamSpeak
   * @param {number} iId Invoice's ID
   * @param {number} group Group ID
   * @param {string} description Group Description
   * @method POST
   * @returns {string} Generated token
   */
  addToken(iId, group, description) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/voices/${iId}/teamspeak/token`,
      json: {
        group: group,
        description: description
      },
      statusCodes: [201, 400]
    })
  }

  /**
   * Removes provided token from TeamSpeak
   * @param {number} iId Invoice's ID
   * @param {string} token Token to remove
   * @method DELETE
   * @returns {null}
   */
  removeToken(iId, token) {
    return this.mTxRequest.request({
      method: 'DELETE',
      uri: `/voices/${iId}/teamspeak/token/${token}`,
      statusCodes: [201]
    })
  }

}