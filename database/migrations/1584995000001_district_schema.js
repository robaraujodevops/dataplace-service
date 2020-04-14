'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DistrictSchema extends Schema {
  up () {
    this.withSchema('build')
    .raw('CREATE SEQUENCE build.districts_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
    .create('districts', (table) => {
      table.string('id')
        .defaultsTo(this.db.raw("('DT'::text || to_char(nextval('build.districts_seq'::regclass), 'FM000'::text))"))
        .notNullable()
        .unique()
        .primary()
      table.string('district_name')
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('districts')
  }
}

module.exports = DistrictSchema