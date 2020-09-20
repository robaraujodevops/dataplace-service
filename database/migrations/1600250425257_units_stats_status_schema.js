'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitsStatsStatusSchema extends Schema {
  up () {
    this.withSchema('build')
    .create('unit_stats_status', (table) => {
      table.increments('id')
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('unit_stats_status')
  }
}

module.exports = UnitsStatsStatusSchema
