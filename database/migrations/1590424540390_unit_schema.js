'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitSchema extends Schema {
  up () {
    this.withSchema('build')
    .raw('CREATE SEQUENCE build.units_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
    .create('units', (table) => {
      table.string('id')
        .defaultsTo(this.db.raw("('UH'::text || to_char(nextval('build.units_seq'::regclass), 'FM000000'::text))"))
        .notNullable()
        .unique()
        .primary()
      table.json('owner_id')
      table.string('comp')
      table.integer('uh')
      table.string('build_id')
        .unsigned()
        .references('id')
        .inTable('build.builds')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('units')
  }
}

module.exports = UnitSchema
