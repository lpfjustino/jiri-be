/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        const products = Array.isArray(req.body)
            ? req.body
            : [req.body];

        products.forEach(product => {
            const { ref, model, color, materials } = product;
            const newProduct = {
                ref,
                model,
                color,
            }
            Product
                .create(newProduct)
                .exec({
                    error: function (err){
                        return res.serverError(err);
                    },
                    success: function (product) {
                        materials.forEach(material => product.materials.add(material));
                        product.save();
                    }
                });
            });
            res.ok(products);
        }
}