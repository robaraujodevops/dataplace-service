'use strict'
const Build    = use('App/Models/Build')
const Admin    = use('App/Models/Administrator')
const Develop  = use('App/Models/Developer')
const District = use('App/Models/District')
const Unit     = use('App/Models/Unit')
const Owner    = use('App/Models/Owner')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with counters
 */
class TileController {
  /**
   * Show a list of all tiles.
   * GET counters
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {

    try{
      return { 
        tileData: [
          {
            title: "Total de Prédios",
            count: await Build.total()
          },
          {
            title: "Total de Unidades",
            count: await Unit.total()
          },
          {
            title: "Total de Proprietários",
            count: await Owner.total()
          },
          {
            title: "Total de Administradoras",
            count: await Admin.total()
          },
          {
            title: "Total de Construtoras",
            count: await Develop.total()
          },
          {
            title: "Total de Bairros",
            count: await District.total()
          }
        ]
      };

    }catch(err){

      return response
              .status(500)
              .json(err.message)
    
            }
  }
}

module.exports = TileController
