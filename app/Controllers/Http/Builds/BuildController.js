'use strict'
const moment = require('moment');
const Build = use('App/Models/Build')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with builds
 */
class BuildController {
  /**
   * Show a list of all builds.
   * GET builds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const { 
      start = 1, 
      length = 10, 
      order = [{}],
      columns = [{"data":"id"}],
      search={"value":""},
      classe="" } = request.get()

    const [ { column = 0,dir = "asc" } ] = order
    const builds = {}
    
    builds.data = await Build
        .builds(classe, search.value)
        .orderBy( columns[column].data, dir )
        .offset(start)
        .limit(length)
        .fetch()

    builds.recordsFiltered = await Build.totalHome(classe)
    builds.recordsTotal = await Build.totalHome(classe)
    
    return builds

  }

  /**
   * Render a form to be used for creating a new build.
   * GET builds/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new build.
   * POST builds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const build = request.post()

    build.build_name = build.build_name.toUpperCase()

    build.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
    build.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    
    try {

      await Build
        .query()
        .insert(build)

      return build
    
    }catch(err) {
      return err
    }
  }

  /**
   * Display a single build.
   * GET builds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const info = await Build.build(params.id);
    const add = await Build.build_address(params.id);
    const contact = await Build.build_contacts(params.id);

    return {
      info,
      add,
      contact
    }

  }

  /**
   * Render a form to update an existing build.
   * GET builds/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update build details.
   * PUT or PATCH builds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a build with id.
   * DELETE builds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BuildController
