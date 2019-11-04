'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {
    static get table () {
        return 'inventarios'
    }

    producto() {
        return this.belongsTo('App/Models/Producto')
    }

    provedor() {
        return this.belongsTo('App/Models/Provedor')
    }
}

module.exports = Inventario
