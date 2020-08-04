'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildTelefoneSchema extends Schema {
  up () {
    this.withSchema('build')
    .raw('CREATE SEQUENCE build.build_telefones_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1')
    .create('build_telefones', (table) => {
      table.increments()
      table.string('build_id')
      .references('id')
      .inTable('build.builds')
      .unsigned()
      .onUpdate('CASCADE')
      table.integer('ddd')
      table.integer('telefone')
      table.timestamps()
    })
  }

  down () {
    this.drop('build_telefones')
  }
}

module.exports = BuildTelefoneSchema
