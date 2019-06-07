const express    = require('express')
const Router     = express.Router()
const Controller = require('../src/controllers')

/* GET home page. */
Router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Departments Routes */
Router.get('/departments',                Controller.Department.GetDepartments);
Router.get('/departments/:department_id', Controller.Department.GetDepartment);

/* Categories Routes */
Router.get('/categories',                             (req, res)=>{});
Router.get('/categories/:category_id',                (req, res)=>{});
Router.get('/categories/inProduct/:product_id',       (req, res)=>{});
Router.get('/categories/inDepartment/:department_id', (req, res)=>{});

/* Attributes Routes */
Router.get('/attributes',                       (req, res)=>{});
Router.get('/attributes/:attribute_id',         (req, res)=>{});
Router.get('/attributes/vales/:attibute_id',    (req, res)=>{});
Router.get('/attributes/inProduct/:product_id', (req, res)=>{});

/* Products Routes */
Router.get('/products',                         (req, res)=>{});
Router.get('/products/search',                  (req, res)=>{});
Router.get('/products/:product_id',             (req, res)=>{});
Router.get('/products/inCategory/:category_id', (req, res)=>{});
Router.get('/products/:product_id/details',     (req, res)=>{});
Router.get('/products/:product_id/location',    (req, res)=>{});
Router.get('/products/:product_id/review',      (req, res)=>{});
Router.post('/products/:product_id/review',     (req, res)=>{});

/* Customers Routes */
Router.put('/customer',            (req, res)=>{});
Router.get('/customer',            (req, res)=>{});
Router.post('/customers',          (req, res)=>{});
Router.post('/customers/login',    (req, res)=>{});
Router.post('/customers/facebook', (req, res)=>{});
Router.put('/customer/address',    (req, res)=>{});
Router.put('/customer/creditCard', (req, res)=>{});

/* Orders Routes */
Router.post('/orders',                      (req, res)=>{});
Router.get('/orders/:order_id',             (req, res)=>{});
Router.get('/orders/inCustomer',            (req, res)=>{});
Router.get('/orders/shortDetail/:order_id', (req, res)=>{});

/* ShoppingCart Routes */
Router.get('/shoppingcart/generateUniqueId',          (req, res)=>{});
Router.post('/shoppingcart/add',                      (req, res)=>{});
Router.get('/shoppingcart/:cart_id',                  (req, res)=>{});
Router.put('/shoppingcart/update/:item_id',           (req, res)=>{});
Router.delete('/shoppingcart/empty/:cart_id',         (req, res)=>{});
Router.get('/shoppingcart/moveToCart/:item_id',       (req, res)=>{});
Router.get('/shoppingcart/totalAmount/:cart_id',      (req, res)=>{});
Router.get('/shoppingcart/saveForLater/:item_id',     (req, res)=>{});
Router.get('/shoppingcart/getSaved/:cart_id',         (req, res)=>{});
Router.delete('/shoppingcart/removeProduct/:item_id', (req, res)=>{});

/* Taxes Routes */
Router.get('/tax',         (req, res)=>{});
Router.get('/tax/:tax_id', (req, res)=>{});

/* Shipping Routes */
Router.get('/shipping/regions',                     (req, res)=>{});
Router.get('/shipping/regions/:shipping_region_id', (req, res)=>{});

/* Stripes Routes */
Router.post('/stripe/charge',   (req, res)=>{});
Router.post('/stripe/webhooks', (req, res)=>{});

module.exports = Router;