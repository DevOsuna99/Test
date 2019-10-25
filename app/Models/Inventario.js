'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {
    static get table () {
        return 'inventario'
    }
}

module.exports = Inventario
