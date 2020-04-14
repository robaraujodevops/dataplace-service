'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistrySchema extends Schema {
  up () {
    this.withSchema('build')
    .raw('CREATE SEQUENCE build.registries_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
    .create('registries', (table) => {
      table.string('id')
        .defaultsTo(this.db.raw("('RG'::text || to_char(nextval('build.registries_seq'::regclass), 'FM000'::text))"))
        .notNullable()
        .unique()
        .primary()
      table.string('registry_name')
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('registries')
  }
}

module.exports = RegistrySchema