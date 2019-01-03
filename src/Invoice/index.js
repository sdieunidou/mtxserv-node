/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Invoice {

  /**
   * Builds the Invoice API module
   * @param {object} mTxRequest
   */
  constructor(mTxRequest) {
    this.mTxRequest = mTxRequest
  }

  /**
   * Returns user's list of invoices in details
   * @method GET
   * @returns {object} List of invoices in details
   */
  getInvoicesList()  {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/invoices`,
      statusCodes: [200]
    })
  }
  
  /**
   * Returns user's invoice details
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Invoice's details
   */
  getInvoice(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/invoices/${iId}`,
      statusCodes: [200]
    })
  }
  
  /**
   * Returns invoice's logs
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns {object} Invoice's logs
   */
  getInvoiceLogs(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/invoices/${iId}/logs`,
      statusCodes: [200]
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
    return this.mTxRequest.request({
      method: 'POST',
      uri: `/invoices/${iId}/offers`,
      json: {
        slots: slots
      },
      statusCodes: [201]
    })
  }
  
  /**
   * Returns invoice's offers list
   * @param {number} iId Invoice's ID
   * @method GET
   * @returns Invoice's offers list
   */
  getInvoiceOffersList(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/invoices/${iId}/offers/game`,
      statusCodes: [200]
    })
  }
  
  /**
   * Returns next date for changing offer
   * @param {number} iId Invoice's ID
   * @method GET
   * @return {object} State and date for changing offer
   */
  getInvoiceNextOfferDate(iId) {
    return this.mTxRequest.request({
      method: 'GET',
      uri: `/invoices/${iId}/offers/next-allowed`,
      statusCodes: [200]
    })
  }

}