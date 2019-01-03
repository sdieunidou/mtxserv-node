/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class mTxResponse {

  constructor(res) {
    if (typeof res !== 'object' || Array.isArray(res)) {
      throw new Error('Empty / Invalid arguments passed to request')
    }
    if (typeof res.uri == 'undefined' || typeof res.statusCode == 'undefined' || typeof res.body == 'undefined') {
      throw new Error('Basic response informations are empty / wrong')
    }
    this.uri = res.uri
    this.statusCode = res.statusCode
    this.body = res.body === "" ? null : res.body
  }

}