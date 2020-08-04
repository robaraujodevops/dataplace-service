'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Build extends Model {

    static get table () {
        return 'build.builds'
    }

    static builds (val) {
        return this
            .query()
            .select(
                'build.builds.id',
                'build_name',
                'district_name',
                'administrator_name',
                'developer_name',
                'dt_constr'
            )
            .innerJoin('build.administrators','build.administrators.id','administrator_id')
            .innerJoin('build.developers','build.developers.id','developer_id')
            .innerJoin('build.districts','build.districts.id','district_id')
            .where('build_name','~*',val)
    }

    static build (id) {
        return this
            .query()
            .select(
                'build.builds.id',
                'build_name',
                'district_name',
                'administrator_name',
                'developer_name',
                'dt_constr',
                'class_name'
            )
            .innerJoin('build.build_classes','build.build_classes.id','class')
            .innerJoin('build.administrators','build.administrators.id','administrator_id')
            .innerJoin('build.developers','build.developers.id','developer_id')
            .innerJoin('build.districts','build.districts.id','district_id')
            .where("build.builds.id",id)
            .first()
    }

    static build_address(id) {
        return this
            .query()
            .select(
                'place',
                'street',
                'number',
                'uf',
                'zip_code'
            )
            .innerJoin('build.build_addresses','build.build_addresses.build_id','build.builds.id')
            .where("build.build_addresses.build_id",id)
            .first()
    }

    static build_contacts(id) {
        return this
            .query()
            .select(
                'telephone',
                'site',
                'email'
            )
            .innerJoin('build.build_contacts','build.build_contacts.build_id','build.builds.id')
            .where("build.build_contacts.build_id",id)
            .first()
    }

    static total () {
        return this
            .query()
            .getCount()
    }

    static totalHome (val) {
        return this
            .query()
            .where('build_name','~*',val)
            .getCount()
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
