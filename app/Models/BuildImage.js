'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BuildImage extends Model {
    static get table () {
        return 'build.build_images'
    }

    static get hidden () {
        return ['build_id']
    }
}

module.exports = BuildImage
