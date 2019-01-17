/**
 * mtxserv-node
 * Node.JS SDK providing easy access to mTxServ's API
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = class Infos {

    /**
     * Builds the Game Infos API module
     * @param {object} mTxRequest
     */
    constructor(mTxRequest) {
        this.mTxRequest = mTxRequest
    }

    /**
     * Get resources used by the gameserver (CPU / RAM)
     * @method GET
     * @param {number} gsId GameServer's ID
     * @returns {null}
     */
    resources(gsId)  {
        return this.mTxRequest.request({
            method: 'GET',
            uri: `/game/${gsId}/resources`,
            statusCodes: [200]
        })
    }

    /**
     * Get current state of gameserver
     * @param {number} gsId GameServer's ID
     * @method GET
     * @returns {null}
     */
    state(gsId)  {
        return this.mTxRequest.request({
            method: 'GET',
            uri: `/game/${gsId}/state`,
            statusCodes: [200]
        })
    }
}
