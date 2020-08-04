'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  async up () {
    const exists = await this.hasTable('users').withSchema('admin')
    
    if(!exists){
      this.withSchema('admin').create('users', (table) => {
        table.increments()
        table.string('username', 80)
          .notNullable()
          .unique()
        table.string('email', 254)
          .notNullable()
          .unique()
        table.string('password', 60)
          .notNullable()
        table.timestamps()
      })
    }

    if(exists){
      this.withSchema('admin').alter('users', (table) => {
        table.string('name', 60)
        table.string('last_name', 60)
        table.string('avatar_img', 60)
          .defaultTo('url_image')
      })
    }

  }

  down () {
    this.withSchema('admin').drop('users')
  }
}

module.exports = UserSchema