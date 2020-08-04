'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerSchema extends Schema {
  up () {
    this.withSchema('build')
    .raw('CREATE SEQUENCE build.owners_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
    .create('owners', (table) => {
      table.string('id')
        .defaultsTo(this.db.raw("('PP'::text || to_char(nextval('build.owners_seq'::regclass), 'FM000000'::text))"))
        .notNullable()
        .unique()
        .primary()
      table.string('owner_name')
      table.string('owner_cpf')
      table.string('owner_cnpj')
      table.timestamps()
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnerSchema
