'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Admin Routes
 */
Route.post('users',         'Admin/UserController.create')
Route.resource('sessions',  'Admin/SessionController').apiOnly()
Route.resource('tile-data', 'Admin/TileController').apiOnly().middleware('auth')

/**
 * Build Routes
 */
Route.resource('administrators',    'Builds/AdministratorController').apiOnly().middleware('auth')
Route.resource('developers',        'Builds/DeveloperController').apiOnly().middleware('auth')
Route.resource('districts',         'Builds/DistrictController').apiOnly().middleware('auth')
Route.resource('registries',        'Builds/RegistryController').apiOnly().middleware('auth')
Route.resource('builds',            'Builds/BuildController').apiOnly().middleware('auth')
Route.resource('units',             'Builds/UnitController').apiOnly().middleware('auth')
Route.resource('owners',            'Builds/OwnerController').apiOnly().middleware('auth')
Route.resource('recent-activities', 'Builds/RecentActivyController').apiOnly().middleware('auth')
