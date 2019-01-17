/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class FTP {

  /**
   * Builds the Game FTP API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }
  
  /**
   * Returns the list of secondary FTP accounts from provided GameServer
   * @param {number} gsId GameServer's ID
   * @method GET
   */
  getSecondaryAccountsList(gsId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/game/${gsId}/ftp`,
      statusCodes: [200]
    })
  }

  /**
   * Adds an FTP account to provided GameServer
   * @param {number} gsId GameServer's ID
   * @param {string} account Account's Name
   * @param {string} path FTP's path
   * @param {string} password Account's Password
   * @method POST
   */
  addFTPAccount(gsId, account, path, password) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/game/${gsId}/ftp`,
      json: {
        account: account,
        path: path,
        password: password
      },
      statusCodes: [201]
    })
  }

  /**
   * Removes specified account from provided GameServer
   * @param {number} gsId GameServer's ID
   * @param {string} account Account's Name
   * @method DELETE
   */
  removeFTPAccount(gsId, account) {
    return this.mTxRequest.request({
      method: 'DELETE',
      uri: `/game/${gsId}/ftp/${account}`,
      statusCodes: [201]
    })
  }

  /**
   * Updates specified account's password
   * @param {number} gsId GameServer's ID
   * @param {string} account Account's Name
   * @param {string} password Account's New Password
   */
  updateFTPPassword(gsId, account, password) {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/game/${gsId}/ftp/${account}/password`,
      json: {
        password: password
      },
      statusCodes: [201]
    })
  }

}