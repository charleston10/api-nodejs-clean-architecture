const { ModelsLoader } = require('../local/loader');
const Sequelize = require('sequelize');
const { db: config } = require('../../../config');

if (config) {
  const sequelize = new
  Sequelize(
    config.database,
    config.user,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
      pool: config.pool
    }
  );

  module.exports = ModelsLoader.load({
    sequelize,
    baseFolder: __dirname + '\\entities\\'
  });
} else {
  /* eslint-disable no-console */
  console.error('Database configuration not found, disabling database.');
  /* eslint-enable no-console */
}