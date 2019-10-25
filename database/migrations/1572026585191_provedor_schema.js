'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvedorSchema extends Schema {
  up () {
    this.create('provedors', (table) => {
      table.increments()
      table.timestamps()
      table.string('nombre', 50).notNullable();
    })
  }

  down () {
    this.drop('provedors')
  }
}

module.exports = ProvedorSchema
