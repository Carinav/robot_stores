const productsRepo = require('../repositories/productsRepo');

const getProducts = async () => {
    console.log('Service: getProducts');
    return await productsRepo.getProducts();
}

module.exports.getProducts = getProducts;