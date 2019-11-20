const dataFaker = require('src/core/infra/support/dataFaker');

module.exports = (factory, { UserEntity }) => {
  factory.define('client', UserEntity, {
    name: dataFaker.name()
  });
};
