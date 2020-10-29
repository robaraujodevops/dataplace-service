'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    console.log("schema",this.withSchema('admin'))
    this.hasTable('admin.users').then((exists) => {
        if(!exists){
          this.withSchema('admin').create('users', (table) => {
            table.uuid('id')
            .defaultsTo(this.db.raw("gen_random_uuid()"))
            .notNullable()
            .unique()
            .primary()
            table.string('username', 80)
              .notNullable()
              .unique()
            table.string('email', 254)
              .notNullable()
              .unique()
            table.string('password', 60)
              .notNullable()
            table.string('name', 60)
            table.string('last_name', 60)
            table.string('avatar_img', 60)
              .defaultTo('url_image')
            table.timestamps()
          })
        }
      })
  }

  down () {
    this.withSchema('admin').drop('users')
  }
}

module.exports = UserSchema