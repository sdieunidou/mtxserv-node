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
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Invoice's details
   */
  getInvoice(iId) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${iId}`,
      paramAtEnd: false,
      params: {}
    })
  }
  
  /**
   * Returns invoice's logs
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Invoice's logs
   */
  getInvoiceLogs(iId) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${iId}/logs`,
      paramAtEnd: false,
      params: {}
    })
  }
  
  /**
   * Should change invoice's slots
   * @param {number} iId Invoice's ID
   * @param {number} slots New invoice's slots number
   * @method POST
   * @see README#Notes
   */
  changeInvoiceSlots(iId, slots) {
    return this.exec({
      method: 'PUT',
      uri: `/invoices/${iId}/offers`,
      paramAtEnd: false,
      params: {
        slots: slots
      }
    })
  }
  
  /**
   * Returns invoice's offers list
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns Invoice's offers list
   */
  getInvoiceOffersList(iId) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${iId}/offers/game`,
      paramAtEnd: false,
      params: {}
    })
  }
  
  /**
   * Returns next date for changing offer
   * @param {number} iId Invoice's ID
   * @method GET
   * @return {object} State and date for changing offer
   */
  getInvoiceNextOfferDate(iId) {
    return this.exec({
      method: 'GET',
      uri: `/invoices/${iId}/offers/next-allowed`,
      paramAtEnd: false,
      params: {}
    })
  }

}