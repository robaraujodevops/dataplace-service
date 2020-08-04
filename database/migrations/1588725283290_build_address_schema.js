'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildAddressSchema extends Schema {
  up () {
    this.withSchema('build')
      .create('build_addresses', (table) => {
        table.increments()
        table.string('build_id')
        .unsigned()
        .references('id')
        .inTable('build.builds')
        .onUpdate('CASCADE')
        table.string('place').notNullable()
        table.string('street').notNullable()
        table.integer('number').notNullable()
        table.string('uf').notNullable()
        table.integer('zip_code').notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('build_addresses')
  }
}

module.exports = BuildAddressSchema
