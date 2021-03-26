'use strict'

/**
 * Upload file to remote storage
 * @param  {string}   name - The user name.
 * @param  {string}   last_name - The user last name
 * @return {string}   The user_name of current user
 */
const setUserName = (name, last_name) => {
    
    name = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\s]/g, "")
    last_name = last_name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\s]/g, "")
    
    return `${name}.${last_name}`
}

module.exports = {
    setUserName
}