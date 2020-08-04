'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use("App/Models/User")

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request }) {
    const data = request.only(["username", "email", "password"])
    
    try{
    
      return await User.create(data)
    
    }catch(err){
    
      return err
    
    }
  }
}

module.exports = UserController
