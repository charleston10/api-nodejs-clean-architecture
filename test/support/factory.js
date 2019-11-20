const path = require('path');
const { factory, SequelizeAdapter } = require('factory-girl');
const { FactoriesLoader } = require('src/core/infra/factoryGirl');
const models = require('src/data/local');

const factoryGirl = new factory.FactoryGirl();
factoryGirl.setAdapter(new SequelizeAdapter());

module.exports = FactoriesLoader.load({
  factoryGirl,
  models,
  baseFolder: path.join(__dirname, 'factories')
});