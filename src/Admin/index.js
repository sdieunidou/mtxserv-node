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
  constructor(accessToken, baseUrl, request) {
    this.accessToken = accessToken
    this.baseUrl = baseUrl
    this.req = request
  }

  /**
   * Get server's administrators list
   * @param {number} id Server's ID
   * @method GET
   * @returns {object} Server's administrators list
   */
  getAdminList(id)  {
    return this.exec({
      method: 'GET',
      uri: `/admins/${id}`,
      paramAtEnd: false,
      params: {}
    })
  }

  /**
   * Adds an administrator to server
   * @param {number} id Server's ID
   * @param {string} email New administrator's email
   * @param {array} grants List of his grants
   * @method POST
   * @see README#Notes
   */
  addAdmin(id, email, grants = []) {
    return this.exec({
      method: 'POST',
      uri: `/admins/${id}`,
      paramAtEnd: false,
      params: {
        user: email,
        roles: grants
      }
    })
  }

  /**
   * Removes administrator from server
   * @param {number} id Server's ID
   * @param {number} userId Admin's ID
   * @method DELETE
   * @see README#Notes
   */
  removeAdmin(id, userId) {
    return this.exec({
      method: 'DELETE',
      uri: `/admins/${id}/${userId}`,
      paramAtEnd: false,
      params: {}
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
    console.log(`${this.baseUrl}${uri}`)
    if (method == 'POST' || method == 'PUT') {
      return JSON.parse(this.req(method, `${this.baseUrl}${uri}`, {
        json: params.params
      }).getBody('utf8'))
    } else {
      return JSON.parse(this.req(method,
        `${this.baseUrl}${uri}access_token=${this.accessToken}`
      ).getBody('utf8'))
    }
  }

}