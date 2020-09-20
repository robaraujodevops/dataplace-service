'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RecentActivity extends Model {
    static get table () {
        return 'build.recent_activities'
    }

    static activitiesByUser(build_id) {
        return this
            .query()
            .select(
                'build.recent_activities.id',
                'build.recent_activities.user_id',
                'content',
                'build.recent_activities.updated_at',
                'username',
                'avatar_img',
                'name',
                'last_name'
            )
            .innerJoin('admin.users','admin.users.id','user_id')
            .where('build_id', build_id)
            .orderBy('build.recent_activities.updated_at','desc')
    }
}

module.exports = RecentActivity
