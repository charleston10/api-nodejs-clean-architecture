
const { asValue, asClass } = require('awilix');

const {
  database,
  UserEntity: userEntity
} = require('../local');

const UserRepository = require('../UserRepository');

module.exports = {
  localContainer: {
    database: asValue(database),
    userEntity: asValue(userEntity)
  },
  repositoryContainer: {
    userRepository: asClass(UserRepository).singleton()
  }
};