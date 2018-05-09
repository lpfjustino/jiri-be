/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        const orders = Array.isArray(req.body)
            ? req.body
            : [req.body];

        Map
            .create()
            .exec({
                error: function (err){
                    return res.serverError(err);
                },
                success: function (map) {
                    orders.forEach(order => map.orders.add(order));
                    map.save();
                }
            });
        res.ok(orders);
    }
}