'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildSchema extends Schema {
  up () {

      this.withSchema('build')
      .raw('CREATE SEQUENCE build.builds_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
      .create('builds', (table) => {
        table.string('id')
        .defaultsTo(this.db.raw("('BD'::text || to_char(nextval('build.builds_seq'::regclass), 'FM000000'::text))"))
        .notNullable()
        .unique()
        .primary()
        table.string('build_name').notNullable()
        table.string('dt_constr')
        table.string('administrator_id')
          .unsigned()
          .references('id')
          .inTable('build.administrators')
          .onUpdate('CASCADE')
        table.string('district_id')
          .unsigned()
          .references('id')
          .inTable('build.districts')
          .onUpdate('CASCADE')
        table.string('developer_id')
          .unsigned()
          .references('id')
          .inTable('build.developers')
          .onUpdate('CASCADE')
        table.string('registry_id')
          .unsigned()
          .references('id')
          .inTable('build.registries')
          .onUpdate('CASCADE')
        table.timestamps()
      })
  }

  down () {
    this.withSchema('build').drop('builds')
  }
}

module.exports = BuildSchema