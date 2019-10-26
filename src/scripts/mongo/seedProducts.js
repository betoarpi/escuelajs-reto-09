const chalk = require('chalk');
const debug = require('debug')('app:scripts:products');
const MongoLib = require('../../lib/mongo');
const { productsMock } = require('../../utils/mocks');

async function seedProducts() {
  try {
    const mongoDB = new MongoLib();

    const promise = productsMock.map(async product => {
      await mongoDB.create('products', product);
    });
    await Promise.all(promise);
    debug(chalk.green(`${promise.length} products have been created`));
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedProducts();
