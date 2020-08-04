'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildContactsSchema extends Schema {
  up () {
    this.withSchema('build')
    .create('build_contacts', (table) => {
      table.increments()
      table.string('build_id')
      .references('id')
      .inTable('build.builds')
      .unsigned()
      .onUpdate('CASCADE')
      table.json('telephone').defaultsTo('{"numbers": []}')
      table.string('site')
      table.json('email').defaultsTo('{"adds": []}')
      table.timestamps()
    })
  }

  down () {
    this.drop('build_contacts')
  }
}

module.exports = BuildContactsSchema
