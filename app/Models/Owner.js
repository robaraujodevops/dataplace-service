"use strict"

/** @type {typeof import("@adonisjs/lucid/src/Lucid/Model")} */
const Model = use("Model")

class Owner extends Model {
    static get table () {
        return "build.owners"
    }

    static owners (val) {
        return this
            .query()
            .select(
                "id",
                "owner_name"
            )
            .where("owner_name","~*",val)
    }

    // static owners () {
    //     return this
    //         .query()
    //         .with("contacts")
    // }

    static totalHome (val) {
        return this
            .query()
            .where("owner_name","~*",val)
            .getCount()
    }

    static total () {
        return this
            .query()
            .getCount()
    }

    contacts () {
        return this.belongsTo("App/Models/OwnerContact")
    }
}

module.exports = Owner
