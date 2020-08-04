'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerTelefoneSchema extends Schema {
  up () {
    this.withSchema('build')
    .create('owner_telefones', (table) => {
      table.increments('id')
      table.string('owner_id')
      .references('id')
      .inTable('build.owners')
      .unsigned()
      .onUpdate('CASCADE')
      table.integer('ddd')
      table.integer('number')
      table.timestamps()
    })
  }

  down () {
    this.drop('owner_telefones')
  }
}

module.exports = OwnerTelefoneSchema
