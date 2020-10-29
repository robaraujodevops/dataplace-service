'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildImagesSchema extends Schema {
  up () {
    this.withSchema('build')
    .create('build_images', (table) => {
      table.increments('id')
      table.string('build_id')
      .references('id')
      .inTable('build.builds')
      .unsigned()
      .onUpdate('CASCADE')
      table.string('name')
      table.string('description')
      table.json('tags').defaultsTo('{"tags": []}')
      table.string('extension')
      table.timestamps(true,true)
    })
  }

  down () {
    this.withSchema('build').drop('build_images')
  }
}

module.exports = BuildImagesSchema
