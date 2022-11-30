const productsRepo = require('../repositories/productsRepo');

const getProducts = async () => {
    console.log('Service: getProducts');
    return await productsRepo.getProducts();
}

const getProduct = async (productsId) => {
    console.log('Service: getProduct ' + productsId);
    return await productsRepo.getProduct(productsId);
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;