/**
 * Material.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
        type: 'integer',
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: 'string'
    },

    department: {
        type: 'string',
        enum: [ "Cortador", "Pesponto", "Bordador", "Solador" ]
    },

    products: {
        collection: 'product',
        via: 'materials'
    }
  }
};

