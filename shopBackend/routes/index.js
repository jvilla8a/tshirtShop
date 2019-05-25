const express = require('express')
const router  = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Departments Routes */
router.get('/departments',                (req, res)=>{});
router.get('/departments/:department_id', (req, res)=>{});

/* Categories Routes */
router.get('/categories',                             (req, res)=>{});
router.get('/categories/:category_id',                (req, res)=>{});
router.get('/categories/inProduct/:product_id',       (req, res)=>{});
router.get('/categories/inDepartment/:department_id', (req, res)=>{});

/* Attributes Routes */
router.get('/attributes',                       (req, res)=>{});
router.get('/attributes/:attribute_id',         (req, res)=>{});
router.get('/attributes/vales/:attibute_id',    (req, res)=>{});
router.get('/attributes/inProduct/:product_id', (req, res)=>{});

/* Products Routes */
router.get('/products',                         (req, res)=>{});
router.get('/products/search',                  (req, res)=>{});
router.get('/products/:product_id',             (req, res)=>{});
router.get('/products/inCategory/:category_id', (req, res)=>{});
router.get('/products/:product_id/details',     (req, res)=>{});
router.get('/products/:product_id/location',    (req, res)=>{});
router.get('/products/:product_id/review',      (req, res)=>{});
router.post('/products/:product_id/review',     (req, res)=>{});

/* Customers Routes */
router.put('/customer',            (req, res)=>{});
router.get('/customer',            (req, res)=>{});
router.post('/customers',          (req, res)=>{});
router.post('/customers/login',    (req, res)=>{});
router.post('/customers/facebook', (req, res)=>{});
router.put('/customer/address',    (req, res)=>{});
router.put('/customer/creditCard', (req, res)=>{});

/* Orders Routes */
router.post('/orders',                      (req, res)=>{});
router.get('/orders/:order_id',             (req, res)=>{});
router.get('/orders/inCustomer',            (req, res)=>{});
router.get('/orders/shortDetail/:order_id', (req, res)=>{});

/* ShoppingCart Routes */
router.get('/shoppingcart/generateUniqueId',          (req, res)=>{});
router.post('/shoppingcart/add',                      (req, res)=>{});
router.get('/shoppingcart/:cart_id',                  (req, res)=>{});
router.put('/shoppingcart/update/:item_id',           (req, res)=>{});
router.delete('/shoppingcart/empty/:cart_id',         (req, res)=>{});
router.get('/shoppingcart/moveToCart/:item_id',       (req, res)=>{});
router.get('/shoppingcart/totalAmount/:cart_id',      (req, res)=>{});
router.get('/shoppingcart/saveForLater/:item_id',     (req, res)=>{});
router.get('/shoppingcart/getSaved/:cart_id',         (req, res)=>{});
router.delete('/shoppingcart/removeProduct/:item_id', (req, res)=>{});

/* Taxes Routes */
router.get('/tax',         (req, res)=>{});
router.get('/tax/:tax_id', (req, res)=>{});

/* Shipping Routes */
router.get('/shipping/regions',                     (req, res)=>{});
router.get('/shipping/regions/:shipping_region_id', (req, res)=>{});

/* Stripes Routes */
router.post('/stripe/charge',   (req, res)=>{});
router.post('/stripe/webhooks', (req, res)=>{});

module.exports = router;