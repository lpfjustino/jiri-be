/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const populateOrder = (order, cb) => {
    const { products } = order;

    async.each(products, (product, cb1) => {
        OrderProduct.findOne({
            order: order.id,
            product: product.id,
        }).then(op => {
            product.size_34 = op.size_34;
            product.size_35 = op.size_35;
            product.size_36 = op.size_36;
            product.size_37 = op.size_37;
            product.size_38 = op.size_38;
            product.size_39 = op.size_39;
            product.logo = op.logo;
            cb1();
        });
    }, (err) => {
        cb();
    });
}

module.exports = {
    find: (req, res) => {
        Order
            .find()
            .populate('products')
            .then(orders => {
                async.each(orders, populateOrder, (err) => {
                   return res.ok(orders);
                });
            })
    },

    create: function(req, res) {
        const { logo, products } = req.body;
        const newOrder = {
            logo
        }
        Order
            .create(newOrder)
            .exec({
                error: function (err){
                  return res.serverError(err);
                },
                success: function (order) {
                    const productsIds = _.pluck(products, "id");
                    const sizes = _.pluck(products, "sizes");

                    productsIds.forEach((product, i) => {
                        const orderItem = {
                            "order": order,
                            "product": product,
                            "size_34": sizes[i]["size_34"],
                            "size_35": sizes[i]["size_35"],
                            "size_36": sizes[i]["size_36"],
                            "size_37": sizes[i]["size_37"],
                            "size_38": sizes[i]["size_38"],
                            "size_39": sizes[i]["size_39"],
                            "logo": logo,
                        };
                        OrderProduct
                            .create(orderItem)
                            .exec({
                                error: function (err){
                                  return res.serverError(err);
                                },
                                success: function (order) {
                                }
                            });
                        });
                        return res.ok(order);
                    }
            });
    },
};

