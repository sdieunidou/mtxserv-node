/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Domain {

  /**
   * Builds the Hosting Domain API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Returns information about domain
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Informations about domain
   */
  getDomain(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/hosting/${iId}/domain`,
      statusCodes: [200]
    })
  }

  /**
   * Deletes custom domain from hosting
   * @param {number} iId Invoice's ID
   * @method DELETE
   * @returns {null}
   */
  removeCustomDomain(iId) {
    return this.mTxRequest.request({
      method: 'DELETE',
      uri: `/hosting/${iId}/domain`,
      statusCodes: [201, 400]
    })
  }

  /**
   * Links custom domain to hosting
   * @param {number} iId Invoice's ID
   * @param {string} domain Custom domain to link
   * @method POST
   * @returns {null}
   */
  addCustomDomain(iId, domain) {
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/hosting/${iId}/domain`,
      json: {
        domain: domain
      },
      statusCodes: [201, 400]
    })
  }

}