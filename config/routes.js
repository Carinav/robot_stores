const shopController = require('../controllers/shopController');

const routes = (app) => {
    app.get('/shop', shopController.getProducts);
    app.get('/product/:productsId', shopController.getProduct);
}

module.exports = routes;
