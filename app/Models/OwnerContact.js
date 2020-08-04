'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OwnerContact extends Model {
    static get table () {
        return 'build.owner_telefones'
    }

    owners () {
        return this.hasMany('App/Models/Owner')
    }
}

module.exports = OwnerContact
