'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdministratorSchema extends Schema {
  up () {
    this.withSchema('build')
    .raw('CREATE SEQUENCE build.administrators_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
    .create('administrators', (table) => {
      table.string('id')
      .defaultsTo(this.db.raw("('ADM'::text || to_char(nextval('build.administrators_seq'::regclass), 'FM000'::text))"))
      .notNullable()
      .unique()
      .primary()
      table.string('administrator_name')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('administrators')
  }
}

module.exports = AdministratorSchema