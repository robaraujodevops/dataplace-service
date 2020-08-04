'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Administrator extends Model {
    
    static get table () {
        return 'build.administrators'
    }

    static total () {
        return this
            .query()
            .getCount()
    }

    builds () {
        return this.hasMany('App/Models/Build')
    }
}

module.exports = Administrator
