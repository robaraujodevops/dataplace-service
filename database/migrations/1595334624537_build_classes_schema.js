'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildClassesSchema extends Schema {
  up () {
    this.withSchema('build')
    .create('build_classes', (table) => {
      table.increments('id')
        .primary()
      table.string('class_name')
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.withSchema('build').drop('build_classes')
  }
}

module.exports = BuildClassesSchema
