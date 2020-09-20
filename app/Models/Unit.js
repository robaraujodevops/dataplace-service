'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Unit extends Model {
    static get table () {
        return 'build.units'
    }

    static units () {
        return this
            .query()
            .select(
                'build.units.id',
                'build.units.comp',
                'build.units.uh',
                'build_id',
                'build.builds.build_name'
            )
            .innerJoin('build.builds','build.builds.id','build_id')
    }

    static unitsByBuild(build_id) {
        return this
            .query()
            .select(
                'build.units.id',
                'build.units.comp',
                'build.units.uh',
                'build.unit_stats.bedrooms',
                'build.unit_stats.rent',
                'build.unit_stats.rent_value',
                'build.unit_stats.sale',
                'build.unit_stats.sale_value',
                'build.unit_stats_status.status'
            )
            .leftJoin('build.unit_stats','build.units.id','unit_id')
            .leftJoin('build.unit_stats_status','build.unit_stats.status','build.unit_stats_status.id')
            .where('build_id','~*',build_id)
    }

    static total () {
        return this
            .query()
            .getCount()
    }

    static totalHome () {
        return this
            .query()
            .innerJoin('build.builds','build.builds.id','build_id')
            .getCount()
    }

    static totalHomeByBuild (build_id) {
        return this
            .query()
            .innerJoin('build.builds','build.builds.id','build_id')
            .where('build_id','~*',build_id)
            .getCount()
    }
}

module.exports = Unit
