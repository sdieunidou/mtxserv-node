/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Hosting {

  /**
   * Builds the Hosting API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
    this.Domain = new ( require('./Domain') )( this.mTxRequest )
  }

  /**
   * Returns used disk space
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {string} Used disk space
   */
  getUsedDiskSpace(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/hosting/${iId}/disk_used`,
      statusCodes: [200]
    })
  }

  /**
   * Changes FTP password
   * @param {number} iId Invoice's ID
   * @param {string} password New password
   * @method PUT
   * @returns {null}
   */
  changeFtpPassword(iId, password) {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/hosting/${iId}/ftp/password`,
      json: {
        password: password
      },
      statusCodes: [201, 400]
    })
  }

  /**
   * Changes SQL password
   * @param {number} iId Invoice's ID
   * @param {string} password New password
   * @method PUT
   * @returns {null}
   */
  changeSqlPassword(iId, password) {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/hosting/${iId}/ftp/password`,
      json: {
        password: password
      },
      statusCodes: [201, 400]
    })
  }

}