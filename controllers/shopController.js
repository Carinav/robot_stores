const productsService = require('../services/productsService');

const getProducts = (req, res) => {
    console.log('Shop Controller: getProducts');
    productsService.getProducts()
        .then((allProducts) => res.json(allProducts));
}

module.exports.getProducts = getProducts;
