'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use("App/Models/User");
const { setUserName } = use("App/Helpers")

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Render a form to be used for creating a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Auth} ctx.auth
   * @param {Response} ctx.response
   */
  async store ({ request, auth, response }) {
    const data = request.only(["name", "last_name", "email", "password"])
    
    data.username = setUserName(data.name, data.last_name)

    try{
      let user = await User.create(data);

      return response.status(201).json({"user": user});
    
    }catch(err){

      if(err.severity && err.severity == "ERROR") {
        return response.status(422).json({"err": err})
      }
      
      return response.status(501).json({"err": err})
    
    }
  }

  async login ({ request, auth, response }) {
    const email = request.input("email")
    const password = request.input("password");

    try {
        let user = await User.findBy('email', email)
        let accessToken = await auth
                            .withRefreshToken(user, false, { expiresIn: '10m' })
                            .attempt(email, password)

        return response.json({"user":user, "access_token": accessToken})

    } catch (e) {
      let strError = e.toString().split(":")
      
      return response.status(401).json({"errorType": strError[0], "errorMessage": strError[2]})

    }
  }

  async checkAuth ({ request, auth, response }) {
    
    try {
      const checkAuth = await auth.check()

      return response.status(202).json({"auth": checkAuth, "user": auth.user})

    }catch (e) {
      let strError = e.toString().split(":")
      let status = strError.length > 0 && strError[0] === "ExpiredJwtToken" ? 200 : 401;

      return response.status(status).json({"errorType": strError[0], "errorMessage": strError[2]})
      
    }

  }

  async logout ({ request, auth, response }) {
    return await auth.getUser()
  }
}

module.exports = UserController
