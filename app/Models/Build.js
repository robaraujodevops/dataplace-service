'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Build extends Model {

    static get table () {
        return 'build.builds'
    }

    static builds () {
        return this
            .query()
                .with('administrator')
                .with('district')
                .with('developer')
                .with('registry')
    }

    static build (id) {
        return this
            .query()
            .where("id",id)
            .with('administrator')
            .with('district')
            .with('developer')
            .with('registry')
            .fetch()
    }

    administrator () {
        return this.belongsTo('App/Models/Administrator')
    }

    district () {
        return this.belongsTo('App/Models/District')
    }

    developer () {
        return this.belongsTo('App/Models/Developer')
    }

    registry () {
        return this.belongsTo('App/Models/Registry')
    }
}

module.exports = Build
