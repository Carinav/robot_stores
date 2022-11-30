const dbService = require('../services/dbService');

let productsCollection = null;
dbService.connectToDB()
    .then((db) => productsCollection = db.collection('products'));

const getProducts = async () => {
    console.log('Repo: getProducts');
    return await productsCollection.find({}).toArray();
}

const getProduct = async (productsId) => {
    console.log('Repo: getProduct');
    return await productsCollection.find({"id":parseInt(productsId)}).toArray();
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;