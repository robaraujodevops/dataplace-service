'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Developer extends Model {
    
    static get table () {
        return 'build.developers'
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

module.exports = Developer
