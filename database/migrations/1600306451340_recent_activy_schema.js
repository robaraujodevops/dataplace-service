'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecentActivySchema extends Schema {
  up () {
    this.withSchema('build')
    .create('recent_activities', (table) => {
      table.increments('id')
      table.uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('admin.users')
        .onUpdate('CASCADE')
      table.string('build_id')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('build_recent_activities')
  }
}

module.exports = RecentActivySchema
