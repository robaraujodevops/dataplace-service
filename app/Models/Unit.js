'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Unit extends Model {
    static get table () {
        return 'build.units'
    }

    static units (val) {
        return this
            .query()
            .select(
                'build.units.id',
                'build.units.comp',
                'build.units.uh',
                'build.builds.build_name'
            )
            .innerJoin('build.builds','build.builds.id','build_id')
            .where('build_name','~*',val)
    }

    static total () {
        return this
            .query()
            .getCount()
    }

    static totalHome (val) {
        return this
            .query()
            .innerJoin('build.builds','build.builds.id','build_id')
            .where('build_name','~*',val)
            .getCount()
    }
}

module.exports = Unit
