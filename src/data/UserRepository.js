const UserMapper = require('./local/entities/mappers/UserMapper');

class UserRepository {
  constructor({ userEntity }) {
    this.userEntity = userEntity;
  }

  async getAll(...args) {
    const users = await this.userEntity.findAll(...args);

    return users.map(UserMapper.toModel);
  }

  async getById(id) {
    const user = await this._getById(id);

    return UserMapper.toModel(user);
  }

  async add(user) {
    const { valid, errors } = user.validate();

    if (!valid) {
      const error = new Error('ValidationError');
      error.details = errors;

      throw error;
    }

    const newUser = await this.userEntity.create(UserMapper.toEntity(user));
    return UserMapper.toModel(newUser);
  }

  async remove(id) {
    const user = await this._getById(id);

    await user.destroy();
    return;
  }

  async update(id, newData) {
    const user = await this._getById(id);

    const transaction = await this.userEntity.sequelize.transaction();

    try {
      const updatedUser = await user.update(newData, { transaction });

      const userEntity = UserMapper.toModel(updatedUser);

      const { valid, errors } = userEntity.validate();

      if (!valid) {
        const error = new Error('ValidationError');
        error.details = errors;

        throw error;
      }

      await transaction.commit();

      return userEntity;
    } catch (error) {
      await transaction.rollback();

      throw error;
    }
  }

  async count() {
    return await this.userEntity.count();
  }

  // Private

  async _getById(id) {
    try {
      return await this.userEntity.findById(id, { rejectOnEmpty: true });
    } catch (error) {
      if (error.name === 'SequelizeEmptyResultError') {
        const notFoundError = new Error('NotFoundError');
        notFoundError.details = `User with id ${id} can't be found.`;

        throw notFoundError;
      }

      throw error;
    }
  }
}

module.exports = UserRepository;
