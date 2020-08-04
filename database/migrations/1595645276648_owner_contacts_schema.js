'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerContactsSchema extends Schema {
  up () {
    this.withSchema('build')
    .create('owner_contacts', (table) => {
      table.increments('id')
      table.string('owner_id')
      .references('id')
      .inTable('build.owners')
      .unsigned()
      .onUpdate('CASCADE')
      table.json('telephone').defaultsTo('{"numbers": []}')
      table.string('site')
      table.json('email').defaultsTo('{"adds": []}')
      table.timestamps()
    })
  }

  down () {
    this.drop('owner_contacts')
  }
}

module.exports = OwnerContactsSchema
