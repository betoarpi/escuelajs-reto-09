const MongoLib = require('../lib/mongo');

class ProductService {
  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }
  async getProducts(query) {
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }
}

module.exports = ProductService;
