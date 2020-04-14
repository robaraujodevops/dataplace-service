'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Registry extends Model {
    
    static get table () {
        return 'build.registries'
    }

    builds () {
        return this.hasMany('App/Models/Build')
    }
}

module.exports = Registry
