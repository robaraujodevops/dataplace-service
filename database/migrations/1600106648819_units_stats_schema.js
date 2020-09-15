'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitStatsSchema extends Schema {
  up () {
    this.withSchema('build')
    .create('unit_stats', (table) => {
      table.increments('id')
      table.string('unit_id')
      .references('id')
      .inTable('build.units')
      .unsigned()
      .onUpdate('CASCADE')
      table.integer('bedrooms')
      table.string('rent', 'length=1').defaultsTo('N')
      table.integer('rent_value').defaultsTo(0)
      table.string('sale', 'length=1').defaultsTo('N')
      table.integer('sale_value').defaultsTo(0)
      table.integer('status')
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('unit_stats')
  }
}

module.exports = UnitStatsSchema
