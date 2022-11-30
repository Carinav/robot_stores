const productsService = require('../services/productsService');

const getProducts = (req, res) => {
    console.log('Shop Controller: getProducts');
    productsService.getProducts()
        .then((allProducts) => res.json(allProducts));
}

const getProduct = (req, res) => {
    console.log('Shop Controller: getProduct');
    let productsId = req.params.productsId;
    productsService.getProduct(productsId)
        .then((Product) => res.json(Product));
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
