'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('productos/crear', 'ProductoController.store')
Route.put('productos/edit/:id', 'ProductoController.update')
Route.delete('productos/delete/:id', 'ProductoController.destroy')

Route.post('provedores/crear', 'ProvedorController.store')
Route.put('provedores/edit/:id', 'ProvedorController.update')
Route.delete('provedores/delete/:id', 'ProvedorController.destroy')

Route.get('Inventario', 'InventarioController.index')
Route.post('Inventario/crear', 'InventarioController.store')
Route.put('Inventario/edit/:id', 'InventarioController.update')
Route.delete('Inventario/delete/:id', 'InventarioController.destroy')
