'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.timestamps()
      table.string('nombre', 50).notNullable();
      table.float('precio', 2)
      table.integer('cantidad')
      table.string('marca', 50).notNullable();
      table.integer('provedor_id').unsigned().references('id').inTable('provedors')
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
