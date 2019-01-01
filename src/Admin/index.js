/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Admin {

  /**
   * Builds the Admin API module
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
   * Get invoice's administrators list
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Invoice's administrators list
   */
  getAdminList(iId)  {
    return this.exec({
      method: 'GET',
      uri: `/admins/${iId}`,
      paramAtEnd: false,
      params: {}
    })
  }

  /**
   * Adds an administrator to invoice
   * @param {number} iId Invoice's ID
   * @param {string} email New administrator's email
   * @param {array} grants Array of his grants (Ex: ["GRANTING_GAME_FILES", "GRANTING_ACTIONS"])
   * @method POST
   * @returns {string} Empty string
   */
  addAdmin(iId, email, grants = []) {
    return this.exec({
      method: 'POST',
      uri: `/admins/${iId}`,
      paramAtEnd: false,
      params: {
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
   * @returns {string} Empty string
   */
  removeAdmin(iId, uId) {
    return this.exec({
      method: 'DELETE',
      uri: `/admins/${iId}/${uId}`,
      paramAtEnd: false,
      params: {}
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
    return this.exec({
      method: 'GET',
      uri: `/admins/${iId}/${uId}`,
      paramAtEnd: false,
      params: {}
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
    return this.exec({
      method: 'PUT',
      uri: `/admins/${iId}/${uId}`,
      paramAtEnd: false,
      params: {
        roles: grants
      }
    })
  }

}