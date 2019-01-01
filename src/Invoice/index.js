/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Invoice {

  /**
   * Builds the Invoice API module
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
   * Returns user's list of invoices in details
   * @method GET
   * @returns {object} List of invoices in details
   */
  getInvoicesList()  {
    return this.exec({
      method: 'GET',
      uri: `/invoices`,
      paramAtEnd: false,
      params: {}
    })
  }
  
  /**
   * Returns user's invoice details
   * @param {number} id Invoice's ID
   * @method GET
   * @returns {object} Invoice's details
   */
  getInvoice(id) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${id}`,
      paramAtEnd: false,
      params: {}
    })
  }
  
  /**
   * Returns invoice's logs
   * @param {number} id Invoice's ID
   * @method GET
   * @returns {object} Invoice's logs
   */
  getInvoiceLogs(id) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${id}/logs`,
      paramAtEnd: false,
      params: {}
    })
  }
  
  /**
   * Should change invoice's slots
   * @param {number} id Invoice's ID
   * @method POST
   * @see README#Notes
   */
  changeInvoiceSlots(id, slots) {
    return this.exec({
      method: 'PUT',
      uri: `/invoices/${id}/offers`,
      paramAtEnd: false,
      params: {
        slots: slots
      }
    })
  }
  
  /**
   * Returns invoice's offers list
   * @param {number} id Invoice's ID
   * @method GET
   * @returns Invoice's offers list
   */
  getInvoiceOffersList(id) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${id}/offers/game`,
      paramAtEnd: false,
      params: {}
    })
  }
  
  /**
   * Returns next date for changing offer
   * @param {number} id Invoice's ID
   * @method GET
   * @return {object} State and date for changing offer
   */
  getInvoiceNextOfferDate(id) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${id}/offers/next-allowed`,
      paramAtEnd: false,
      params: {}
    })
  }

}