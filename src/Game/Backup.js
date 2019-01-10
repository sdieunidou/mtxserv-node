/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Backup {

  /**
   * Builds the Game Backup API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Returns backup list for specified world
   * @param {number} gsId GameServer's ID
   * @param {string} world World's name
   * @method GET
   */
  getBackupsList(gsId, world)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/game/${gsId}/backup/backups?world=${world}`,
      statusCodes: [200]
    })
  }

}