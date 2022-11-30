const dbService = require('../services/dbService');

let productsCollection = null;
dbService.connectToDB()
    .then((db) => productsCollection = db.collection('products'));

const getProducts = async () => {
    console.log('Repo: getProducts');
    return await productsCollection.find({}).toArray();
}

module.exports.getProducts = getProducts;