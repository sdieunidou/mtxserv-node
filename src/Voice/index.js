/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Voice {

  /**
   * Builds the Voice API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
    this.Actions = new ( require('./Actions') )( this.mTxRequest )
    this.Mumble = new ( require('./Mumble') )( this.mTxRequest )
    this.TeamSpeak = new ( require('./TeamSpeak') )( this.mTxRequest )
  }

  /**
   * Returns VoiceServer's Name
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {string} VoiceServer's name
   */
  getName(iId)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/voices/${iId}/config/name`,
      statusCodes: [200]
    })
  }

  /**
   * Changes VoiceServer's Name
   * @param {number} iId Invoice's ID
   * @param {string} name New VoiceServer's name
   * @method PUT
   * @returns {null}
   */
  changeName(iId, name)  {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/voices/${iId}/config/name`,
      json: {
        name: name
      },
      statusCodes: [201, 400]
    })
  }

}