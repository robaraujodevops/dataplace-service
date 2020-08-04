'use strict'
const Owner = use('App/Models/Owner')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with ownerhomes
 */
class OwnerController {
  /**
   * Show a list of all ownerhomes.
   * GET ownerhomes
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
      search={"value":""} } =request.get()

    const [ { column,dir } ] = order

    const owners = {}
    
    owners.data = await Owner
        .owners(search.value)
        .orderBy( columns[column].data, dir )
        .offset(start)
        .limit(length)
        .fetch()

    owners.recordsFiltered = await Owner.totalHome(search.value)
    owners.recordsTotal = await Owner.totalHome(search.value)
    
    return owners

  }

  /**
   * Render a form to be used for creating a new ownerhome.
   * GET ownerhomes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new ownerhome.
   * POST ownerhomes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single ownerhome.
   * GET ownerhomes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing ownerhome.
   * GET ownerhomes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ownerhome details.
   * PUT or PATCH ownerhomes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a ownerhome with id.
   * DELETE ownerhomes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OwnerController
