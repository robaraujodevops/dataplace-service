'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Token extends Model {
   /**
   * Set a schema name personalized
   */
  static get table () {
    return 'admin.tokens'
  }
}

module.exports = Token
