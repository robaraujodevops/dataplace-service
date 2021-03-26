'use strict'

class SessionController {
  async store ({ request, auth }) { 
    const { email, password } = request.all()

    try{ 
      const token = await auth
        .attempt(email, password)
        
        console.log(token)
      return token

    }catch(err){ console.log(err); return err }
  }

  async show ({ request, auth }) {

  }

  async index ({request, response, auth}) {
    try{

      const { id, username, name, last_name, avatar_img } = await auth.getUser()
      
      return {
        id,
        username,
        name,
        last_name,
        avatar_img
      }

    } catch (err) { return err }
  }

  /**
   * Delete a token with id.
   * DELETE sessions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    
    console.log('session_destroyed');

    return {}
  }

}

module.exports = SessionController
