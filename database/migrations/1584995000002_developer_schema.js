'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeveloperSchema extends Schema {
  up () {
    this.withSchema('build')
    .raw('CREATE SEQUENCE build.developers_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
    .create('developers', (table) => {
      table.string('id')
        .defaultsTo(this.db.raw("('DEV'::text || to_char(nextval('build.developers_seq'::regclass), 'FM0000'::text))"))
        .notNullable()
        .unique()
        .primary()
      table.string('developer_name')
        .notNullable()
        .unique()
      table.integer('ddd')
      table.integer('phone')
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('developers')
  }
}

module.exports = DeveloperSchema