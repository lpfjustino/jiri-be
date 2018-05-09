/**
 * Product.js
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

    ref: {
      type: 'integer'
    },

    model: {
        type: 'string'
    },

    color: {
      type: 'string'
    },

    materials: {
        collection: 'material',
        via: 'products',
    },

    orders: {
        collection: 'order',
        via: 'products',
        through: 'orderproduct'
    }
  }
};

