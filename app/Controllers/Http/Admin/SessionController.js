'use strict'

class SessionController {
  async store ({ request, auth }) { 
    const { email, password } = request.all()

    try{ 
      const token = await auth.attempt(email, password)
      
      return token

    }catch(err){ console.log(err); return err }
  }

  async index ({request, response, auth}) {
    try{

      const { username, name, last_name, avatar_img } = await auth.getUser()
      
      return {
        username,
        name,
        last_name,
        avatar_img
      }

    } catch (err) { return err }
  }
}

module.exports = SessionController
