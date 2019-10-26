const MongoConnect = require('../lib/mongo');

class ProductService {
  constructor() {
    this.client = new MongoConnect(MONGO_URI, { useNewParser: true });
    this.dbName = DB_NAME;
  }
  getProducts(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }
}

module.exports = ProductService;
