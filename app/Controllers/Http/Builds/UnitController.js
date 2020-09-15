'use strict'
const Unit = use('App/Models/Unit')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with unithomes
 */
class UnitController {
  /**
   * Show a list of all unithomes.
   * GET unithomes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const { start,length,order,columns,search, build_id } = request.get()
    const [ { column,dir } ] = order

    const units = {}
    
    if(start && !build_id){
      units.data = await Unit
      .units()
      .orderBy( columns[column].data, dir )
      .offset(start)
      .limit(length)
      .fetch()

      units.recordsFiltered = await Unit.totalHome()
      units.recordsTotal = await Unit.totalHome()      
    }
    
    if(build_id){
      units.data = await Unit
      .unitsByBuild(build_id)
      .orderBy( columns[column].data, dir )
      .offset(start)
      .limit(length)
      .fetch()

      units.recordsFiltered = await Unit.totalHomeByBuild(build_id)
      units.recordsTotal = await Unit.totalHomeByBuild(build_id)
    }
    
    return units
  }

  /**
   * Render a form to be used for creating a new unithome.
   * GET unithomes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new unithome.
   * POST unithomes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single unithome.
   * GET unithomes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing unithome.
   * GET unithomes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update unithome details.
   * PUT or PATCH unithomes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a unithome with id.
   * DELETE unithomes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UnitController
