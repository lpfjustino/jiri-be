/**
 * MaterialController
 *
 * @description :: Server-side logic for managing materials
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    associate: function(req, res) {
        Product
            .findOne(req.param('productId'))
            .exec((err, product) => {
                if(err) {
                    res.send(err, 500);
                }

                product.materials.add(req.param('materialId'));
                product.save();

                product.save((err) => {
                    res.send(err, 500);
                });
            });

        res.ok();
    },
};

