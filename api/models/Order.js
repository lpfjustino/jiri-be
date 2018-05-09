/**
 * Order.js
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

        logo: {
            type: 'string',
        },

        map: {
            model: 'map'
        },

        products: {
            collection: 'product',
            via: 'orders',
            through: 'orderproduct',
        }
    }
};

