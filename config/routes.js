const shopController = require('../controllers/shopController');

const routes = (app) => {
    app.get('/shop', shopController.getProducts);
    // app.get('/product/:id', shopController.getProduct);
}

module.exports = routes;
