/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Admin {

  /**
   * Builds the Admin API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Get invoice's administrators list
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Invoice's administrators list
   */
  getAdminList(iId)  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/admins/${iId}`,
      statusCodes: [200]
    })
  }

  /**
   * Adds an administrator to invoice
   * @param {number} iId Invoice's ID
   * @param {string} email New administrator's email
   * @param {array} grants Array of his grants (Ex: ["GRANTING_GAME_FILES", "GRANTING_ACTIONS"])
   * @method POST
   * @returns {null}
   */
  addAdmin(iId, email, grants = []) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/admins/${iId}`,
      statusCodes: [201, 400],
      json: {
        user: email,
        roles: grants
      }
    })
  }

  /**
   * Removes administrator from invoice
   * @param {number} iId Invoice's ID
   * @param {number} uId Admin's ID
   * @method DELETE
   * @returns {null}
   */
  removeAdmin(iId, uId) {
    return this.mTxRequest.request({
      method: 'DELETE',
      uri: `/admins/${iId}/${uId}`,
      statusCodes: [200]
    })
  }

  /**
   * Returns specified admin details
   * @param {number} iId Invoice's ID
   * @param {number} uId Admin's ID
   * @method GET
   * @returns {object} Admin's details
   */
  getAdmin(iId, uId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/admins/${iId}/${uId}`,
      statusCodes: [200]
    })
  }

  /**
   * Edits an administrator's grants
   * @param {number} iId Invoice's ID
   * @param {number} uId Admin's ID
   * @param {array} grants New array of grants
   * @method PUT
   * @returns {object} Admin's details
   */
  editAdmin(iId, uId, grants = []) {
    return this.mTxRequest.request({
      method: 'PUT',
      uri: `/admins/${iId}/${uId}`,
      statusCodes: [201, 400],
      json: {
        roles: grants
      }
    })
  }

}